import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
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

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(public)" />
        <Stack.Screen name="(private)" />
        <Stack.Screen name="index" />
      </Stack>
      <StatusBar style="light" />
    </>
  )
}
