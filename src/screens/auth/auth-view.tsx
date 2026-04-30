import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Image } from "expo-image"
import Animated from "react-native-reanimated"

import { colors } from "@/shared/theme/colors"
import { usePressAnimation } from "@/animations/hooks/use-press-animation"
import { useInputFocusAnimation } from "@/animations/hooks/use-input-focus-animation"

import type { useAuthViewModel } from "./use-auth-view-model"

import { Button } from "@/shared/components/button"
import { Input } from "@/shared/components/input"
import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"
import { AppText } from "@/shared/components/app-text"

type AuthViewProps = ReturnType<typeof useAuthViewModel>

export const AuthView = ({
  username,
  setUsername,
  handleAuthentication,
}: AuthViewProps) => {
  const pressAnimation = usePressAnimation({ scaleActive: 0.8 })
  const inputFocusAnimation = useInputFocusAnimation()

  return (
    <SafeAreaView style={styles.container}>
      <DismissKeyboardView>
        <View style={styles.content}>
          {/* WELCOME SECTION */}
          <View style={styles.welcomeSection}>
            <Image
              source={require("@/assets/logo.svg")}
              style={{ width: 71, height: 71 }}
              contentFit="contain"
            />

            <View style={{ alignItems: "center" }}>
              <AppText variant="heading-xl">memory game</AppText>
              <AppText variant="text-md" color={colors.grayscale[200]}>
                Teste sua memória enquanto aprende!
              </AppText>
            </View>
          </View>

          {/* LOGIN FORM */}
          <View style={styles.loginForm}>
            <Input
              placeholder="Digite seu nome"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="words"
              returnKeyType="done"
              containerStyle={inputFocusAnimation.animatedStyle}
              onFocus={inputFocusAnimation.onFocus}
              onBlur={inputFocusAnimation.onBlur}
            />

            <Animated.View style={pressAnimation.animatedStyle}>
              <Button
                label="Entrar"
                onPress={handleAuthentication}
                onPressIn={pressAnimation.onPressIn}
                onPressOut={pressAnimation.onPressOut}
              />
            </Animated.View>
          </View>
        </View>
      </DismissKeyboardView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale[600],
    paddingHorizontal: 40,
    justifyContent: "center",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    gap: 40,
    paddingBottom: 48,
  },

  welcomeSection: {
    alignItems: "center",
    gap: 20,
  },

  loginForm: {
    width: "100%",
    gap: 16,
  },
})
