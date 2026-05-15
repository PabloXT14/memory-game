import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { colors } from "@/shared/theme/colors"

import { Header } from "./components/header"
import { AppText } from "@/shared/components/app-text"

import type { useGameViewModel } from "./use-game-view-model"

type GameViewProps = ReturnType<typeof useGameViewModel>

export const GameView = ({ challengeSelected }: GameViewProps) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Header />

      <View style={styles.description}>
        <AppText variant="heading-lg">{challengeSelected?.title}</AppText>

        <AppText variant="text-md" color={colors.grayscale[200]}>
          Encontre todos os pares dentro do tempo!
        </AppText>
      </View>
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale[600],
  },

  content: {
    flex: 1,
    gap: 32,

    padding: 24,
    paddingTop: 32,
  },

  description: {
    gap: 2,
  },
})
