import { Text, type TextProps } from "react-native"

import { colors } from "@/shared/theme/colors"
import { typography } from "@/shared/theme/typography"

type Variant = keyof typeof typography

type AppTextProps = TextProps & {
  variant?: Variant
  color?: string
}

export const AppText = ({
  variant = "text-md",
  color = colors.grayscale[100],
  style,
  ...props
}: AppTextProps) => (
  <Text style={[typography[variant], { color }, style]} {...props} />
)
