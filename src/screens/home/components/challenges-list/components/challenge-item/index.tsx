import { Pressable, StyleSheet, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { ArrowRight } from "lucide-react-native"
import Animated from "react-native-reanimated"

import { colors } from "@/shared/theme/colors"
import { usePressAnimation } from "@/animations/hooks/use-press-animation"

import { AppText } from "@/shared/components/app-text"

import type { Challenge } from "@/shared/interfaces/challenge"

type ChallengeItemProps = {
  challenge: Challenge
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export const ChallengeItem = ({ challenge }: ChallengeItemProps) => {
  const pressAnimation = usePressAnimation({ scaleActive: 0.8 })

  return (
    <AnimatedPressable
      onPressIn={pressAnimation.onPressIn}
      onPressOut={pressAnimation.onPressOut}
      style={pressAnimation.animatedStyle}
    >
      <LinearGradient
        colors={[...challenge.gradient]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} // Horizontal gradient
        style={styles.container}
      >
        <AppText variant="heading-md" style={styles.title}>
          {challenge.title}
        </AppText>

        <View
          style={[styles.button, { backgroundColor: challenge.arrowColor }]}
        >
          <ArrowRight size={20} color={colors.grayscale[600]} />
        </View>
      </LinearGradient>
    </AnimatedPressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 20,

    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.grayscale[400],
  },

  title: {
    maxWidth: "70%",
  },

  button: {
    width: 40,
    height: 40,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 9999,
  },
})
