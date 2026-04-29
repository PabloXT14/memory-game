import { useCallback } from "react"
import type { DimensionValue } from "react-native"
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  type WithSpringConfig,
} from "react-native-reanimated"

import { SPRING_CONFIG } from "../config/animation-config"

type UsePressAnimationConfig = {
  scaleActive?: number
  springConfig?: WithSpringConfig
  width?: DimensionValue
}

export const usePressAnimation = ({
  scaleActive = 0.95,
  springConfig = SPRING_CONFIG.press,
  width = "100%",
}: UsePressAnimationConfig = {}) => {
  const scale = useSharedValue(1)

  const onPressIn = useCallback(() => {
    scale.value = withSpring(scaleActive, springConfig)
  }, [scale, scaleActive, springConfig])

  const onPressOut = useCallback(() => {
    scale.value = withSpring(1, springConfig)
  }, [scale, springConfig])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    width,
  }))

  return { onPressIn, onPressOut, animatedStyle }
}
