import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ArrowLeft, Trophy } from "lucide-react-native"

import { colors } from "@/shared/theme/colors"
import { fontFamily } from "@/shared/theme/font-family"
import { useAuthStore } from "@/shared/stores/auth-store"

import { Button } from "@/shared/components/button"

export default function Home() {
  const logout = useAuthStore((state) => state.logout)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Home</Text>

        <Button label="Logout" onPress={logout} />

        <Button label="Label" variant="secondary" isLoading />

        <Button variant="icon-only" leftIcon={ArrowLeft} />

        <Button
          variant="icon-only"
          leftIcon={Trophy}
          iconColor={colors.accent.purple}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale[600],
    paddingHorizontal: 40,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },

  title: {
    color: colors.grayscale[100],
    fontSize: 20,
    fontFamily: fontFamily.baloo2.extraBold,
    lineHeight: 20 * 1.4, // 140% line height for better readability
  },
})
