import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { colors } from "@/shared/theme/colors"
import { fontFamily } from "@/shared/theme/font-family"

import { useAuthStore } from "@/shared/stores/auth-store"

export default function Home() {
  const logout = useAuthStore((state) => state.logout)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Home</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.logoutButton}
          onPress={logout}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
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

  logoutButton: {
    backgroundColor: colors.accent.purple,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  logoutText: {
    color: colors.grayscale[100],
    fontSize: 16,
    fontFamily: fontFamily.baloo2.extraBold,
    lineHeight: 16 * 1.4, // 140% line height for better readability
  },
})
