import { useState } from "react"

import type { DifficultyOption } from "@/shared/interfaces/difficulty"

const DIFFICULTIES: DifficultyOption[] = [
  {
    id: "easy",
    label: "Fácil",
    icon: require("@/assets/icons/level-01.svg"),
  },
  {
    id: "medium",
    label: "Médio",
    icon: require("@/assets/icons/level-02.svg"),
  },
  {
    id: "hard",
    label: "Difícil",
    icon: require("@/assets/icons/level-03.svg"),
  },
]

export const useDifficultySelectionViewModel = () => {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<DifficultyOption>(DIFFICULTIES[0])

  const handleSelectDifficulty = (difficulty: DifficultyOption) => {
    setSelectedDifficulty(difficulty)
  }

  return {
    difficulties: DIFFICULTIES,
    selectedDifficulty,
    handleSelectDifficulty,
  }
}
