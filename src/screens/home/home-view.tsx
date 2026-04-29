import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { colors } from "@/shared/theme/colors"

import { Header } from "./components/header"
import { DifficultySelection } from "./components/difficulty-selection"

import type { useHomeViewModel } from "./use-home-view-model"

type HomeProps = ReturnType<typeof useHomeViewModel>

export const HomeView = (_props: HomeProps) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Header />

      <DifficultySelection />
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
})
