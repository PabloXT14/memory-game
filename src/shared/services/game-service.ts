/** biome-ignore-all lint/complexity/noThisInStatic: option */

import type { GameChallenge, GameResult, GameState } from "../interfaces/game"

import { CardService } from "./card-service"

type SelectCardResult = {
  newGameState: GameState
  action: "flip" | "match" | "mismatch" | "invalid"
}

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

  static selectCard(gameState: GameState, cardId: string): SelectCardResult {
    // OBS: selectCards will only contains just 2 cards that were selected, not all cards selected in the game
    const { cards, selectedCards, status } = gameState

    if (status !== "playing") {
      return {
        newGameState: gameState,
        action: "invalid",
      }
    }

    const selectedCard = cards.find((card) => card.id === cardId)

    if (!selectedCard || selectedCard.isMatched || selectedCard.isFlipped) {
      return {
        newGameState: gameState,
        action: "invalid",
      }
    }

    // Prevent selecting more than 2 cards at once
    if (selectedCards.length >= 2) {
      return {
        newGameState: gameState,
        action: "invalid",
      }
    }

    const updatedCardArray = cards.map((card) =>
      card.id === cardId ? CardService.flipCard(card, true) : card
    )

    const newSelectedCards = [...selectedCards, selectedCard]

    if (newSelectedCards.length === 1) {
      return {
        newGameState: {
          ...gameState,
          cards: updatedCardArray,
          selectedCards: newSelectedCards,
        },
        action: "flip",
      }
    }

    const [firstCard, secondCard] = newSelectedCards

    const isMatch = firstCard.name === secondCard.name

    if (isMatch) {
      const finalCardsArray = updatedCardArray.map((card) => {
        if (card.id === firstCard.id || card.id === secondCard.id) {
          return CardService.markAsMatched(card)
        }
        return card
      })

      return {
        newGameState: {
          ...gameState,
          cards: finalCardsArray,
          selectedCards: [],
        },
        action: "match",
      }
    }

    return {
      newGameState: {
        ...gameState,
        cards: updatedCardArray,
        selectedCards: newSelectedCards,
      },
      action: "mismatch",
    }
  }

  static resetMismatchedCards(gameState: GameState): GameState {
    const { selectedCards, cards } = gameState

    const updatedCards = cards.map((card) => {
      const isSelected = selectedCards.some(
        (selected) => selected.id === card.id
      )

      if (isSelected && !card.isMatched) {
        return CardService.flipCard(card, false)
      }

      return card
    })

    return {
      ...gameState,
      cards: updatedCards,
      selectedCards: [],
    }
  }

  static pauseGame(gameState: GameState): GameState {
    if (gameState.status !== "playing") {
      return gameState
    }

    return {
      ...gameState,
      status: "paused",
    }
  }

  static resumeGame(gameState: GameState): GameState {
    if (gameState.status !== "paused") {
      return gameState
    }

    return {
      ...gameState,
      status: "playing",
    }
  }

  static resetGame(challenge: GameChallenge): GameState {
    return this.initializeGame(challenge)
  }

  static tick(gameState: GameState): GameState {
    if (gameState.status !== "playing") {
      return gameState
    }

    const timeRemaining = Math.max(gameState.timeRemaining - 1, 0)
    const timeElapsed = gameState.timeElapsed + 1

    const isTimeout = timeRemaining === 0

    return {
      ...gameState,
      timeRemaining,
      timeElapsed,
      status: isTimeout ? "timeout" : gameState.status,
    }
  }

  static finishGame(gameState: GameState): GameResult | null {
    if (!gameState.challenge) {
      return null
    }

    return {
      completed: gameState.status === "finished",
      timeElapsed: gameState.timeElapsed,
      challenge: gameState.challenge,
    }
  }
}
