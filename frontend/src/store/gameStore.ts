import { create } from 'zustand';
import { Roulette } from '../roulette';

interface GameState {
  isPlaying: boolean;
  score: number;
  highScore: number;
  setPlaying: (playing: boolean) => void;
  updateScore: (points: number) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  isPlaying: false,
  score: 0,
  highScore: 0,
  setPlaying: (playing) => set({ isPlaying: playing }),
  updateScore: (points) =>
    set((state) => {
      const newScore = state.score + points;
      return {
        score: newScore,
        highScore: Math.max(state.highScore, newScore),
      };
    }),
  resetGame: () => set({ score: 0, isPlaying: false }),
})); 