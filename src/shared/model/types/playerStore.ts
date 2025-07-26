interface PlayerState {
  isReady: boolean;
  duration: number;
  currentProgress: number;
  buffered: number;
  audioControl: HTMLAudioElement | null;
}

interface PlayerActions {
  setIsReady: (isReady: boolean) => void;
  setDuration: (duration: number) => void;
  setCurrentProgress: (progress: number) => void;
  setBuffered: (buffered: number) => void;
  setAudioControl: (audioControl: HTMLAudioElement | null) => void;
}

export interface PlayerStore extends PlayerState {
  actions: PlayerActions;
}
