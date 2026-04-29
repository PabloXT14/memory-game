import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Clock4 } from "lucide-react-native"

import { colors } from "@/shared/theme/colors"

import { AppText } from "@/shared/components/app-text"

import type { useDifficultySelectionViewModel } from "./use-difficulty-selection-view-model"
import { Image } from "expo-image"

type DifficultySelectionProps = ReturnType<
  typeof useDifficultySelectionViewModel
>

export const DifficultySelectionView = ({
  difficulties,
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
      {difficulties.map((difficulty) => (
        <TouchableOpacity
          key={difficulty.id}
          style={styles.item}
          activeOpacity={0.8}
        >
          <Image
            source={difficulty.icon}
            style={{ width: 16, height: 14 }}
            contentFit="contain"
          />

          <AppText variant="heading-sm">{difficulty.label}</AppText>
        </TouchableOpacity>
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
    width: "100%",
    flexDirection: "row",
    gap: 8,
    padding: 8,

    borderWidth: 1,
    borderColor: colors.grayscale[400],
    borderRadius: 9999,
  },

  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,

    padding: 8,
    paddingLeft: 4,

    backgroundColor: colors.grayscale[500],

    borderRadius: 9999,
    borderWidth: 1,
    borderColor: colors.grayscale[400],
  },
})
