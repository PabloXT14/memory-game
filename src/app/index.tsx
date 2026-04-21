import { Redirect } from "expo-router"

export default function Index() {
  const isLoggedIn = true // Replace with actual authentication state

  if (isLoggedIn) {
    return <Redirect href="/home" />
  }

  return <Redirect href="/login" />
}
