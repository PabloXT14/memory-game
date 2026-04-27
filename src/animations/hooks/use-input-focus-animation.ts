import { colors } from "@/shared/theme/colors"
import { useCallback } from "react"
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  type WithSpringConfig,
} from "react-native-reanimated"

type UseInputFocusAnimationConfig = {
  springConfig?: WithSpringConfig
}

export const useInputFocusAnimation = ({
  springConfig = { duration: 300, mass: 0.5 },
}: UseInputFocusAnimationConfig = {}) => {
  // 0 = unfocused, 1 = focused
  const focus = useSharedValue(0)

  const onFocus = useCallback(() => {
    focus.value = withSpring(1, springConfig)
  }, [focus, springConfig])

  const onBlur = useCallback(() => {
    focus.value = withSpring(0, springConfig)
  }, [focus, springConfig])

  const animatedStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      focus.value,
      [0, 1],
      [colors.grayscale[400], colors.accent.purple]
    )
    return {
      borderColor,
      transform: [{ scale: 1 + 0.02 * focus.value }], // Slightly scale up when focused
    }
  })

  return {
    focus,
    onFocus,
    onBlur,
    animatedStyle,
  }
}
