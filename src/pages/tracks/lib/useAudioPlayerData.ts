import { useEffect, useRef } from "react";
import {
  usePlaylistCurrentTrackIndex,
  usePlaylistTracks,
  usePlaylistIsPlaying,
  usePlaylistDirection,
  usePlaylistActions,
  usePlayerActions,
} from "@/shared/model";

export const useAudioPlayerData = () => {
  const tracks = usePlaylistTracks();
  const isPlaying = usePlaylistIsPlaying();
  const currentTrackIndex = usePlaylistCurrentTrackIndex();
  const direction = usePlaylistDirection();
  const { setCurrentTrackIndex, setDirection, playTrackFromQueue } =
    usePlaylistActions();
  const { setBuffered, setCurrentProgress, setAudioControl } =
    usePlayerActions();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks[currentTrackIndex];
  const hasNext = currentTrackIndex < tracks.length - 1;
  const hasPrevious = currentTrackIndex > 0;

  useEffect(() => {
    audioRef.current?.pause();

    const timeout = setTimeout(() => {
      audioRef.current?.play();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentTrack]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    setAudioControl(audioRef.current);
  }, [currentTrack, setAudioControl]);

  useEffect(playTrackFromQueue, [tracks, playTrackFromQueue]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  };

  const playNext = () => {
    setCurrentProgress(0);
    if (hasNext) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setDirection("forward");
    } else {
      setCurrentTrackIndex(-1);
      setDirection("forward");
    }
  };

  const playPrev = () => {
    setCurrentProgress(0);
    if (hasPrevious) {
      setCurrentTrackIndex(currentTrackIndex - 1);
      setDirection("backward");
    } else {
      setCurrentTrackIndex(-1);
      setDirection("forward");
    }
  };

  const handleError = () => {
    if (direction === "forward") {
      playNext();
    } else {
      playPrev();
    }
  };

  const handleBufferProgress: React.ReactEventHandler<HTMLAudioElement> = (
    e
  ) => {
    const audio = e.currentTarget;
    const dur = audio.duration;
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i
          );
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  return {
    currentTrack,
    hasPrevious,
    hasNext,
    audioRef,
    handleBufferProgress,
    playPrev,
    playNext,
    togglePlay,
    handleError,
  };
};
