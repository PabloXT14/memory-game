import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ArrowLeft, Trophy } from "lucide-react-native"

import { colors } from "@/shared/theme/colors"

import { Button } from "@/shared/components/button"
import { AppText } from "@/shared/components/app-text"

import type { useHomeViewModel } from "./use-home-view-model"

type HomeProps = ReturnType<typeof useHomeViewModel>

export const HomeView = ({ logout }: HomeProps) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <AppText variant="heading-xl">Home</AppText>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale[600],
  },

  content: {
    flex: 1,
    gap: 32,

    padding: 24,
    paddingTop: 32,
  },
})
