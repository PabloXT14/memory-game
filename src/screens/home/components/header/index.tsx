import { StyleSheet, View } from "react-native"
import { Trophy } from "lucide-react-native"

import { AppText } from "@/shared/components/app-text"
import { Button } from "@/shared/components/button"

import { colors } from "@/shared/theme/colors"
import { useAuthStore } from "@/shared/stores/auth-store"
import { usePressAnimation } from "@/animations/hooks/use-press-animation"

export const Header = () => {
  const username = useAuthStore((state) => state.user?.name)
  const pressAnimation = usePressAnimation({ scaleActive: 0.8, width: "auto" })

  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <AppText variant="heading-lg">Boas vindas, {username}!</AppText>
        <AppText variant="text-md" color={colors.grayscale[200]}>
          Comece a jogar selecionando os desafios abaixo!
        </AppText>
      </View>

      <Button
        variant="icon-only"
        leftIcon={Trophy}
        iconColor={colors.accent.purple}
        onPressIn={pressAnimation.onPressIn}
        onPressOut={pressAnimation.onPressOut}
        animationStyle={pressAnimation.animatedStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 40,
  },

  texts: {
    flex: 1,
    maxWidth: "70%",
    gap: 2,
  },
})
