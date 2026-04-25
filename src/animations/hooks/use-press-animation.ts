import { useSharedValue, type WithSpringConfig } from "react-native-reanimated"

type UsePressAnimationConfig = {
  scaleActive?: number
  springConfig?: WithSpringConfig
}

export const usePressAnimation = () => {
  const scale = useSharedValue(1)

  return {}
}
