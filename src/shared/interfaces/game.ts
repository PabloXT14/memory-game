import type { ChallengeCard } from "./challenge"
import type { Difficulty } from "./difficulty"

export type GameStatus =
  | "idle"
  | "countdown"
  | "playing"
  | "paused"
  | "finished"
  | "timeout"

export type GameChallenge = {
  id: string
  title: string
  difficulty: Difficulty
  estimatedTime: number
  timeLimit: number
  cards: ChallengeCard[]
  gradient?: [string, string]
}

export type GameState = {
  status: GameStatus
  challenge: GameChallenge | null
  selectedCards: ChallengeCard[]
  timeRemaining: number
  timeElapsed: number
  startedAt: Date | null
  cards: ChallengeCard[]
}

export type GameResult = {
  completed: boolean
  timeElapsed: number
  challenge: GameChallenge
}
