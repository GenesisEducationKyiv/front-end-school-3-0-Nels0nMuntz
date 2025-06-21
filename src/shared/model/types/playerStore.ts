interface PlayerState {
  isReady: boolean;
  duration: number;
  currentProgress: number;
  buffered: number;
}

interface PlayerActions {
  setIsReady: (isReady: boolean) => void;
  setDuration: (duration: number) => void;
  setCurrentProgress: (progress: number) => void;
  setBuffered: (buffered: number) => void;
}

export interface PlayerStore extends PlayerState {
    actions: PlayerActions;
}
