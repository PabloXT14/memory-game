import type { GameChallenge, GameState } from "../interfaces/game"

import { CardService } from "./card-service"

export class GameService {
  static initializeGame(challenge: GameChallenge): GameState {
    const cards = CardService.generateGameCards(challenge)

    return {
      status: "countdown",
      challenge,
      selectedCards: [],
      cards,
      timeRemaining: challenge.timeLimit,
      timeElapsed: 0,
      startedAt: null,
    }
  }

  static startGame(gameState: GameState): GameState {
    return {
      ...gameState,
      status: "playing",
      startedAt: new Date(),
    }
  }
}
