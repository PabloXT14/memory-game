import { create } from "zustand"

import type { GameChallenge, GameResult, GameState } from "../interfaces/game"

type GameStore = GameState & {
  initGame: (challenge: GameChallenge) => void // Initialize the game with a specific challenge
  startGame: () => void // Start the game, transitioning from "idle" to "countdown"
  selectCard: (cardId: string) => void
  resetMisMatchedCards: () => void
  finishGame: () => GameResult | null
}

export const useGameStore = create<GameStore>((_set, _get) => ({
  status: "idle",
  challenge: null,
  cards: [],
  selectedCards: [],
  timeElapsed: 0,
  startedAt: null,
  timeRemaining: 0,

  initGame: () => {},
  startGame: () => {},
  selectCard: (cardId: string) => {},
  resetMisMatchedCards: () => {},
  finishGame: () => null,
}))
