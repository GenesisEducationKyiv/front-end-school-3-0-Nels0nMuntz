import { create } from "zustand";
import { PlayerStore } from "../types/playerStore";

const playerStore = create<PlayerStore>()((set) => ({
  isReady: false,
  duration: 0,
  currentProgress: 0,
  buffered: 0,
  audioControl: null,
  actions: {
    setIsReady: (isReady) => set({ isReady }),
    setDuration: (duration) => set({ duration }),
    setCurrentProgress: (progress) => set({ currentProgress: progress }),
    setBuffered: (buffered) => set({ buffered }),
    setAudioControl: (audioControl) => set({ audioControl }),
  },
}));

export const usePlayerIsReady = () => playerStore((state) => state.isReady);
export const usePlayerDuration = () => playerStore((state) => state.duration);
export const usePlayerCurrentProgress = () =>
  playerStore((state) => state.currentProgress);
export const usePlayerBuffered = () => playerStore((state) => state.buffered);
export const usePlayerAudioControl = () => playerStore((state) => state.audioControl);
export const usePlayerActions = () => playerStore((state) => state.actions);