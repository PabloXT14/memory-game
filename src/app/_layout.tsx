import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_800ExtraBold,
} from "@expo-google-fonts/baloo-2"
import { KeyboardProvider } from "react-native-keyboard-controller"

import { useAuthStore } from "@/shared/stores/auth-store"

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_800ExtraBold,
  })

  const user = useAuthStore((state) => state.user)

  if (!fontsLoaded) {
    return null
  }

  return (
    <KeyboardProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={!user}>
          <Stack.Screen name="(public)" />
          <Stack.Screen name="index" />
        </Stack.Protected>

        <Stack.Protected guard={!!user}>
          <Stack.Screen name="(private)" />
        </Stack.Protected>
      </Stack>

      <StatusBar style="light" />
    </KeyboardProvider>
  )
}
