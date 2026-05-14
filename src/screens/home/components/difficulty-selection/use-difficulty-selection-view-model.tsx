import { useEffect } from "react"
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"

import {
  type DifficultyOption,
  DIFFICULTY_OPTIONS,
} from "@/shared/interfaces/difficulty"

import { useNumberAnimation } from "@/animations/hooks/use-number-animation"

export type DifficultySelectionViewModelProps = {
  selectedDifficulty: DifficultyOption
  setSelectedDifficulty: (difficulty: DifficultyOption) => void
}

export const useDifficultySelectionViewModel = ({
  selectedDifficulty,
  setSelectedDifficulty,
}: DifficultySelectionViewModelProps) => {
  const { animatedStyle: timeAnimatedStyle } = useNumberAnimation(
    selectedDifficulty.timeLimit
  )

  const selectedIndex =
    Object.values(DIFFICULTY_OPTIONS).indexOf(selectedDifficulty)
  const translateX = useSharedValue(selectedIndex * 100) // 100% of the tab width

  const handleSelectDifficulty = (difficulty: DifficultyOption) => {
    setSelectedDifficulty(difficulty)
  }

  useEffect(() => {
    const newIndex =
      Object.values(DIFFICULTY_OPTIONS).indexOf(selectedDifficulty)

    translateX.value = withSpring(newIndex * 100, {
      stiffness: 120,
      damping: 30,
    })
  }, [selectedDifficulty, translateX])

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: `${translateX.value}%` }],
  }))

  return {
    difficulties: DIFFICULTY_OPTIONS,
    selectedDifficulty,
    handleSelectDifficulty,
    animatedIndicatorStyle,
    timeAnimatedStyle,
  }
}
