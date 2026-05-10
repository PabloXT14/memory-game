import { create } from "zustand"

import type { GameChallenge, GameResult, GameState } from "../interfaces/game"
import { GameService } from "../services/game-service"

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

export const useGameStore = create<GameStore>((set, get) => ({
  status: "idle",
  challenge: null,
  cards: [],
  selectedCards: [],
  timeElapsed: 0,
  startedAt: null,
  timeRemaining: 0,

  // Game Logic
  initGame: (challenge: GameChallenge) => {
    const gameState = GameService.initializeGame(challenge)

    set(gameState)
  },
  startGame: () => {
    const currentState = get()

    const newState = GameService.startGame(currentState)

    set(newState)
  },
  finishGame: () => {
    const currentState = get()

    const result = GameService.finishGame(currentState)

    return result
  },
  selectCard: (cardId: string) => {},
  resetMisMatchedCards: () => {
    const currentState = get()

    const newState = GameService.resetMismatchedCards(currentState)

    set(newState)
  },

  // Timer
  timerId: null,
  tick: () => {},
  startTimer: () => {},
  stopTimer: () => {},

  // Life Cycle Management
  pauseGame: () => {},
  resumeGame: () => {},
  resetGame: () => {},
  clearGame: () => {},

  // Card Preview
  previewAllCards: () => {},
  hideAllCards: () => {},
}))
