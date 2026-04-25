import type { WithSpringConfig } from "react-native-reanimated"

export const SPRING_CONFIG = {
  press: {
    dumping: 15, // The higher the dumping, the more "bouncy" the animation will be
    stiffness: 150, // The higher the stiffness, the faster the animation will be
  } as WithSpringConfig,
}
