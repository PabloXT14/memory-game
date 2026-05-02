import { create } from "zustand"

import type { GameChallenge, GameResult, GameState } from "../interfaces/game"

type GameStore = GameState & {
  initGame: (challenge: GameChallenge) => void // Initialize the game with a specific challenge
  startGame: () => void // Start the game, transitioning from "idle" to "countdown"
  pauseGame: () => void
  resumeGame: () => void
  resetGame: () => void
  clearGame: () => void
  finishGame: () => GameResult | null

  selectCard: (cardId: string) => void
  resetMisMatchedCards: () => void

  timerId: number | null
  tick: () => void
  startTimer: () => void
  stopTimer: () => void

  previewAllCards: () => void
  hideAllCards: () => void
}

export const useGameStore = create<GameStore>((_set, _get) => ({
  status: "idle",
  challenge: null,
  cards: [],
  selectedCards: [],
  timeElapsed: 0,
  startedAt: null,
  timeRemaining: 0,

  // Game Logic
  initGame: () => {},
  selectCard: (cardId: string) => {},
  resetMisMatchedCards: () => {},

  // Timer
  timerId: null,
  tick: () => {},
  startTimer: () => {},
  stopTimer: () => {},

  // Life Cycle Management
  startGame: () => {},
  pauseGame: () => {},
  resumeGame: () => {},
  resetGame: () => {},
  clearGame: () => {},
  finishGame: () => null,

  // Card Preview
  previewAllCards: () => {},
  hideAllCards: () => {},
}))
