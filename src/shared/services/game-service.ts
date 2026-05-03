/** biome-ignore-all lint/complexity/noThisInStatic: option */

import type { ChallengeCard } from "../interfaces/challenge"
import type {
  GameChallenge,
  GameState,
  GameStoreCard,
} from "../interfaces/game"

export class GameService {
  static createCardPair(
    challengeCard: ChallengeCard,
    startIndex: number
  ): [GameStoreCard, GameStoreCard] {
    const card1: GameStoreCard = {
      ...challengeCard,
      id: `${challengeCard.name}-1-${startIndex}`,
      isFlipped: false,
      isMatched: false,
    }

    const card2: GameStoreCard = {
      ...challengeCard,
      id: `${challengeCard.name}-2-${startIndex + 2}`,
      isFlipped: false,
      isMatched: false,
    }

    return [card1, card2]
  }

  static generateGameCards(challenge: GameChallenge): GameStoreCard[] {
    const cards: GameStoreCard[] = []

    challenge.cards.forEach((challengeCard, index) => {
      const [card1, card2] = this.createCardPair(challengeCard, index)

      cards.push(card1, card2)
    })

    // Shuffle the cards using Fisher-Yates algorithm
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[cards[i], cards[j]] = [cards[j], cards[i]]
    }

    return cards
  }

  static initializeGame(challenge: GameChallenge): GameState {
    const cards = this.generateGameCards(challenge)

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
}
