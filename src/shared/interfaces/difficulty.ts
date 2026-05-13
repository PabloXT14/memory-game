export type Difficulty = "easy" | "medium" | "hard"

export type DifficultyOption = {
  difficulty: Difficulty
  label: string
  icon: string
  timeLimit: number // in seconds
  estimatedTime: string // in seconds
}

export const DIFFICULTY_OPTIONS: Record<Difficulty, DifficultyOption> = {
  easy: {
    difficulty: "easy",
    label: "Fácil",
    icon: require("@/assets/icons/level-01.svg"),
    timeLimit: 300,
    estimatedTime: "5 min",
  },
  medium: {
    difficulty: "medium",
    label: "Médio",
    icon: require("@/assets/icons/level-02.svg"),
    timeLimit: 240,
    estimatedTime: "4 min",
  },
  hard: {
    difficulty: "hard",
    label: "Difícil",
    icon: require("@/assets/icons/level-03.svg"),
    timeLimit: 30, // 30 just for testing (the final value will be 180)
    estimatedTime: "3 min",
  },
}
