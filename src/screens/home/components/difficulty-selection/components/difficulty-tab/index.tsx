import {
  StyleSheet,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native"
import { Image } from "expo-image"

import { AppText } from "@/shared/components/app-text"

import type { DifficultyOption } from "@/shared/interfaces/difficulty"

type DifficultyTabProps = TouchableOpacityProps & {
  difficulty: DifficultyOption
  isSelected?: boolean
}

export const DifficultyTab = ({
  difficulty,
  isSelected,
  ...props
}: DifficultyTabProps) => (
  <TouchableOpacity
    style={[styles.container, isSelected && styles.selectedContainer]}
    activeOpacity={0.8}
    {...props}
  >
    <Image
      source={difficulty.icon}
      style={{ width: 16, height: 14 }}
      contentFit="contain"
    />

    <AppText variant="heading-sm">{difficulty.label}</AppText>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,

    padding: 8,
    paddingLeft: 4,

    opacity: 0.5,
  },

  selectedContainer: {
    // backgroundColor: colors.grayscale[500],
    // borderColor: colors.grayscale[400],
    opacity: 1,
  },
})
