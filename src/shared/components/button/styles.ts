import { StyleSheet } from "react-native"

import { colors } from "@/shared/theme/colors"
import { fontFamily } from "@/shared/theme/font-family"

export const styles = StyleSheet.create({
  container: {
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
    gap: 8,

    borderRadius: 9999,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  label: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fontFamily.baloo2.extraBold,
    lineHeight: 16 * 1.4,
  },

  shadow: {
    borderRadius: 9999,

    // Custom shadow using boxShadow for better control and consistency across platforms
    // boxShadow syntax: offsetX offsetY blurRadius spread(optional) color
    // 33 = 20% opacity with hex alpha
    boxShadow: `
        -10px 10px 24px -3px ${colors.accent.purpleDark}33,
        10px 10px 24px -4px ${colors.accent.cyanDark}33
      `,
  },

  primary: {
    height: 48,

    paddingHorizontal: 24,
    paddingVertical: 12,

    backgroundColor: "transparent",
  },

  secondary: {
    height: 48,

    paddingHorizontal: 24,
    paddingVertical: 12,

    backgroundColor: colors.grayscale[500],
    borderWidth: 1,
    borderColor: colors.grayscale[400],
  },

  iconOnly: {
    width: 40,
    height: 40,

    padding: 0,

    backgroundColor: colors.grayscale[500],
    borderWidth: 1,
    borderColor: colors.grayscale[400],
  },
})
