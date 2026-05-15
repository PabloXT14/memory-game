import { StyleSheet, View } from "react-native"
import { router } from "expo-router"
import { ArrowLeft, Clock4 } from "lucide-react-native"

import { AppText } from "@/shared/components/app-text"
import { Button } from "@/shared/components/button"

import { colors } from "@/shared/theme/colors"

export const Header = () => (
  <View style={styles.container}>
    <Button
      variant="icon-only"
      leftIcon={ArrowLeft}
      iconColor={colors.grayscale[100]}
      onPress={() => router.back()}
    />

    <View style={styles.timer}>
      <Clock4 size={16} color={colors.feedback.info} />

      <AppText variant="heading-sm" color={colors.feedback.info}>
        05:00
      </AppText>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  timer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: 40,

    paddingHorizontal: 16,
    paddingVertical: 6,

    backgroundColor: colors.grayscale[500],
    borderRadius: 9999,

    borderWidth: 1,
    borderColor: colors.grayscale[400],
  },
})
