import { useEffect, useState } from "react"
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"

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

  const selectedIndex = DIFFICULTIES.indexOf(selectedDifficulty)
  const translateX = useSharedValue(selectedIndex * 100) // 100% of the tab width

  const handleSelectDifficulty = (difficulty: DifficultyOption) => {
    setSelectedDifficulty(difficulty)
  }

  useEffect(() => {
    const newIndex = DIFFICULTIES.indexOf(selectedDifficulty)

    translateX.value = withSpring(newIndex * 100, {
      stiffness: 120,
      damping: 30,
    })
  }, [selectedDifficulty, translateX])

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: `${translateX.value}%` }],
  }))

  return {
    difficulties: DIFFICULTIES,
    selectedDifficulty,
    handleSelectDifficulty,
    animatedIndicatorStyle,
  }
}
