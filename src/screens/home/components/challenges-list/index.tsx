import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native"
import { ArrowRight } from "lucide-react-native"

import { colors } from "@/shared/theme/colors"
import { CHALLENGES } from "@/shared/data/challenges"

import { AppText } from "@/shared/components/app-text"

export const ChallengesList = () => (
  <View style={styles.container}>
    <AppText color={colors.grayscale[200]}>Desafios disponíveis</AppText>

    <FlatList
      data={CHALLENGES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <AppText>{item.title}</AppText>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: item.arrowColor }]}
          >
            <ArrowRight size={20} color={colors.grayscale[600]} />
          </TouchableOpacity>
        </View>
      )}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {},

  button: {
    width: 40,
    height: 40,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 9999,
  },
})
