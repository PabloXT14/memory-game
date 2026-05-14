import { useCallback, useState } from "react"

import {
  DIFFICULTY_OPTIONS,
  type DifficultyOption,
} from "@/shared/interfaces/difficulty"

import { useAuthStore } from "@/shared/stores/auth-store"
import { router } from "expo-router"

export const useHomeViewModel = () => {
  const logout = useAuthStore((state) => state.logout)

  const [selectedDifficulty, setSelectedDifficulty] =
    useState<DifficultyOption>(DIFFICULTY_OPTIONS.easy)

  const handleSelectChallenge = useCallback(
    (challengeId: string) => {
      router.push({
        pathname: "/(private)/game",
        params: {
          challengeId,
          difficulty: selectedDifficulty.difficulty,
        },
      })
    },
    [selectedDifficulty]
  )

  return {
    logout,
    selectedDifficulty,
    setSelectedDifficulty,
    handleSelectChallenge,
  }
}
