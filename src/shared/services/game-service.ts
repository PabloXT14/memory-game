import type { GameChallenge, GameState } from "../interfaces/game"

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
}
