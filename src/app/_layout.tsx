import { Stack } from "expo-router"
import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_800ExtraBold,
} from "@expo-google-fonts/baloo-2"

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_800ExtraBold,
  })

  if (!fontsLoaded) {
    return null
  }

  return <Stack />
}
