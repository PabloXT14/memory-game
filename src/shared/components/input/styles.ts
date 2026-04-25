import { StyleSheet } from "react-native"

import { colors } from "@/shared/theme/colors"
import { fontFamily } from "@/shared/theme/font-family"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 48,

    paddingHorizontal: 24,

    flexDirection: "row",
    gap: 8,
    alignItems: "center",

    borderRadius: 9999,
    borderWidth: 1,
    borderColor: colors.grayscale[400],

    backgroundColor: colors.grayscale[500],
  },

  input: {
    width: "100%",
    height: "100%",

    padding: 0,
    margin: 0,

    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false, // Remove extra padding on Android

    color: colors.grayscale[100],
    fontSize: 16,
    fontFamily: fontFamily.baloo2.regular,
    lineHeight: 24,
  },
})
