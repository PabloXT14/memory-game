import { useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"

import type { Difficulty } from "@/shared/interfaces/difficulty"

type RouteParams = {
  challengeId: string
  difficulty: Difficulty
}

export default function Game() {
  const params = useLocalSearchParams<RouteParams>()

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>Game</Text>
      <Text style={{ fontSize: 16, marginTop: 8 }}>
        Challenge ID: {params.challengeId}, Difficulty: {params.difficulty}
      </Text>
    </View>
  )
}
