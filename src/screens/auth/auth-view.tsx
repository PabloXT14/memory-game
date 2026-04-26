import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Image } from "expo-image"
import { KeyboardAvoidingView } from "react-native-keyboard-controller"
import Animated from "react-native-reanimated"

import { colors } from "@/shared/theme/colors"
import { fontFamily } from "@/shared/theme/font-family"
import { usePressAnimation } from "@/animations/hooks/use-press-animation"

import type { useAuthViewModel } from "./use-auth-view-model"

import { Button } from "@/shared/components/button"
import { Input } from "@/shared/components/input"

type AuthViewProps = ReturnType<typeof useAuthViewModel>

export const AuthView = ({
  username,
  setUsername,
  handleAuthentication,
}: AuthViewProps) => {
  const pressAnimation = usePressAnimation({ scaleActive: 0.8 })

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={styles.content}>
          {/* WELCOME SECTION */}
          <View style={styles.welcomeSection}>
            <Image
              source={require("@/assets/images/logo.svg")}
              style={{ width: 71, height: 71 }}
              contentFit="contain"
            />

            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>memory game</Text>
              <Text style={styles.subtitle}>
                Teste sua memória enquanto aprende!
              </Text>
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
      </KeyboardAvoidingView>
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

  title: {
    color: colors.grayscale[100],
    fontSize: 28,
    fontFamily: fontFamily.baloo2.extraBold,
    lineHeight: 28 * 1.4, // 140% line height for better readability
  },

  subtitle: {
    color: colors.grayscale[200],
    fontSize: 16,
    fontFamily: fontFamily.baloo2.regular,
    lineHeight: 24,
  },

  loginForm: {
    width: "100%",
    gap: 16,
  },
})
