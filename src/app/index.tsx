import { fontFamily } from "@/shared/theme/font-family"
import { Text, View } from "react-native"

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontFamily: fontFamily.baloo2.extraBold }}>
        Hello World!
      </Text>
    </View>
  )
}
