import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import type { LucideIcon } from "lucide-react-native"

import { styles } from "./styles"
import { colors, gradients } from "@/shared/theme/colors"

type Variant = "primary" | "secondary" | "icon-only"

type ButtonProps = TouchableOpacityProps & {
  label?: string
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  iconColor?: string
  variant?: Variant
  isLoading?: boolean
}

export const Button = ({
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  iconColor = colors.white,
  variant = "primary",
  isLoading = false,
  disabled,
  style,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || isLoading

  const content = (
    <View style={styles.content}>
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <>
          {LeftIcon && <LeftIcon color={iconColor} size={20} />}
          {label && <Text style={styles.label}>{label}</Text>}
          {RightIcon && <RightIcon color={iconColor} size={20} />}
        </>
      )}
    </View>
  )

  return (
    <TouchableOpacity activeOpacity={0.8} disabled={isDisabled} {...props}>
      {variant === "primary" && (
        <LinearGradient
          colors={[
            gradients.colorful[0],
            gradients.colorful[1],
            gradients.colorful[2],
          ]}
          locations={[0, 0.5, 1]} // 0%, 50%, 100%
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.container, styles.shadow, styles.primary, style]}
        >
          {content}
        </LinearGradient>
      )}

      {variant === "secondary" && (
        <View style={[styles.container, styles.secondary, style]}>
          {content}
        </View>
      )}

      {variant === "icon-only" && (
        <View style={[styles.container, styles.iconOnly, style]}>
          {content}
        </View>
      )}
    </TouchableOpacity>
  )
}
