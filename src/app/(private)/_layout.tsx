import { Stack } from "expo-router"

export default function PrivateLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name="home" />
      <Stack.Screen name="history" />
      <Stack.Screen name="game" />
    </Stack>
  )
}
