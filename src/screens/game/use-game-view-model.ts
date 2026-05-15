import { useLocalSearchParams } from "expo-router"

import type { Difficulty } from "@/shared/interfaces/difficulty"
import { CHALLENGES } from "@/shared/data/challenges"

type RouteParams = {
  challengeId: string
  difficulty: Difficulty
}

export const useGameViewModel = () => {
  const params = useLocalSearchParams<RouteParams>()

  const challengeSelected = CHALLENGES.find(
    (challenge) => challenge.id === params.challengeId
  )

  return {
    challengeSelected,
  }
}
