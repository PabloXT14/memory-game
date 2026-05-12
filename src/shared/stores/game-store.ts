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
  tick: () => {
    const currentState = get()

    const newState = GameService.tick(currentState)

    set(newState)

    if (newState.status === "timeout") {
      get().stopTimer()
    }
  },
  startTimer: () => {
    const currentState = get()

    // Timer already running
    if (currentState.timerId) {
      clearInterval(currentState.timerId)
    }

    const timerId = setInterval(() => {
      get().tick()
    }, 1000)

    set({ timerId })
  },
  stopTimer: () => {
    const currentState = get()

    if (currentState.timerId) {
      clearInterval(currentState.timerId)
      set({ timerId: null })
    }
  },

  // Life Cycle Management
  pauseGame: () => {
    const currentState = get()

    const newState = GameService.pauseGame(currentState)

    set(newState)

    get().stopTimer()
  },
  resumeGame: () => {
    const currentState = get()

    const newState = GameService.resumeGame(currentState)

    set(newState)

    get().startTimer()
  },
  resetGame: () => {
    const currentState = get()

    if (!currentState.challenge) {
      return
    }

    const newState = GameService.resetGame(currentState.challenge)

    set(newState)

    get().stopTimer()
  },
  clearGame: () => {
    get().stopTimer()

    set({
      status: "idle",
      challenge: null,
      cards: [],
      selectedCards: [],
      timeElapsed: 0,
      startedAt: null,
      timeRemaining: 0,
    })
  },

  // Card Preview
  previewAllCards: () => {},
  hideAllCards: () => {},
}))
