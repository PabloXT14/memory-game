import { FlatList, StyleSheet, View } from "react-native"

import { colors } from "@/shared/theme/colors"
import { CHALLENGES } from "@/shared/data/challenges"

import { AppText } from "@/shared/components/app-text"
import { ChallengeItem } from "./components/challenge-item"

type ChallengesListProps = {
  onSelectChallenge: (challengeId: string) => void
}

export const ChallengesList = ({ onSelectChallenge }: ChallengesListProps) => (
  <View style={styles.container}>
    <AppText color={colors.grayscale[200]}>Desafios disponíveis</AppText>

    <FlatList
      data={CHALLENGES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ChallengeItem
          challenge={item}
          onPress={() => onSelectChallenge(item.id)}
        />
      )}
      contentContainerStyle={{ gap: 12 }}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
})
