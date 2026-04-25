import { StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Image } from "expo-image"

import { colors } from "@/shared/theme/colors"
import { fontFamily } from "@/shared/theme/font-family"

import type { useAuthViewModel } from "./use-auth-view-model"
import { Button } from "@/shared/components/button"

type AuthViewProps = ReturnType<typeof useAuthViewModel>

export const AuthView = ({
  username,
  setUsername,
  handleAuthentication,
}: AuthViewProps) => {
  return (
    <SafeAreaView style={styles.container}>
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
          <TextInput
            placeholder="Digite seu nome"
            placeholderTextColor={colors.grayscale[300]}
            style={styles.input}
            autoCapitalize="words"
            returnKeyType="done"
            value={username}
            onChangeText={setUsername}
          />

          <Button label="Entrar" onPress={handleAuthentication} />
        </View>
      </View>
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

  input: {
    width: "100%",
    height: 48,

    padding: 0,
    margin: 0,

    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false, // Remove extra padding on Android

    borderRadius: 9999,
    borderWidth: 1,
    borderColor: colors.grayscale[400],

    backgroundColor: colors.grayscale[500],

    color: colors.grayscale[100],
    fontSize: 16,
    fontFamily: fontFamily.baloo2.regular,
    lineHeight: 24,
  },
})
