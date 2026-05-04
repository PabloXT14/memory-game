/** biome-ignore-all lint/complexity/noThisInStatic: option */

import type { ChallengeCard } from "../interfaces/challenge"
import type { GameChallenge, GameStoreCard } from "../interfaces/game"

export class CardService {
  static shuffleCards(cards: GameStoreCard[]): GameStoreCard[] {
    const shuffledCards = [...cards]

    // Shuffle the cards using Fisher-Yates algorithm (summary: the every last card is swapped with a random card)
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ]
    }

    return shuffledCards
  }

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

    return this.shuffleCards(cards)
  }
}
