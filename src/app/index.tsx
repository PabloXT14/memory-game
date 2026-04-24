import { useAuthStore } from "@/shared/stores/auth-store"
import { Redirect } from "expo-router"

export default function Index() {
  const user = useAuthStore((state) => state.user)
  const isLoggedIn = !!user

  if (isLoggedIn) {
    return <Redirect href="/home" />
  }

  return <Redirect href="/login" />
}
