import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Image } from "expo-image"
import { LinearGradient } from "expo-linear-gradient"

import { colors, gradients } from "@/shared/theme/colors"
import { fontFamily } from "@/shared/theme/font-family"

export default function Login() {
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
          />

          <TouchableOpacity activeOpacity={0.8} style={styles.shadow}>
            <LinearGradient
              colors={[
                gradients.colorful[0],
                gradients.colorful[1],
                gradients.colorful[2],
              ]}
              locations={[0, 0.5, 1]} // 0%, 50%, 100%
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </LinearGradient>
          </TouchableOpacity>
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

  button: {
    width: "100%",
    height: 48,

    paddingHorizontal: 24,
    paddingVertical: 12,

    justifyContent: "center",
    alignItems: "center",
    gap: 8,

    borderRadius: 9999,
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fontFamily.baloo2.extraBold,
    lineHeight: 16 * 1.4,
  },

  shadow: {
    borderRadius: 9999,

    // Custom shadow using boxShadow for better control and consistency across platforms
    // boxShadow syntax: offsetX offsetY blurRadius spread(optional) color
    // 33 = 20% opacity with hex alpha
    boxShadow: `
      -10px 10px 24px -3px ${colors.accent.purpleDark}33,
      10px 10px 24px -4px ${colors.accent.cyanDark}33
    `,
  },
})
