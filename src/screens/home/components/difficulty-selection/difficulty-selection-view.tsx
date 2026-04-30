import { StyleSheet, View } from "react-native"
import { Clock4 } from "lucide-react-native"
import Animated from "react-native-reanimated"

import { colors } from "@/shared/theme/colors"

import { AppText } from "@/shared/components/app-text"
import { DifficultyTab } from "./components/difficulty-tab"

import type { useDifficultySelectionViewModel } from "./use-difficulty-selection-view-model"

type DifficultySelectionProps = ReturnType<
  typeof useDifficultySelectionViewModel
>

export const DifficultySelectionView = ({
  difficulties,
  selectedDifficulty,
  handleSelectDifficulty,
  animatedIndicatorStyle,
}: DifficultySelectionProps) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <AppText color={colors.grayscale[200]}>Dificuldade</AppText>

      <View style={styles.tag}>
        <Clock4 size={16} color={colors.feedback.info} />
        <AppText>5 min</AppText>
      </View>
    </View>

    <View style={styles.selection}>
      <Animated.View style={[styles.indicator, animatedIndicatorStyle]} />

      {difficulties.map((difficulty) => (
        <DifficultyTab
          key={difficulty.id}
          difficulty={difficulty}
          isSelected={selectedDifficulty?.id === difficulty.id}
          onPress={() => handleSelectDifficulty(difficulty)}
        />
      ))}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  tag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,

    paddingHorizontal: 12,
    paddingVertical: 4,

    backgroundColor: colors.grayscale[500],

    borderRadius: 8,
  },

  selection: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    gap: 8,
    padding: 8,

    borderWidth: 1,
    borderColor: colors.grayscale[400],
    borderRadius: 9999,
  },

  indicator: {
    zIndex: 0,
    position: "absolute",
    top: 8,
    left: 8,
    width: "33%",
    height: "100%",

    backgroundColor: colors.grayscale[500],
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: colors.grayscale[400],
  },
})
