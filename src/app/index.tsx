import { useAuthStore } from "@/shared/stores/auth-store"
import { Redirect } from "expo-router"

export default function Index() {
  const user = useAuthStore((state) => state.user)

  if (!user) {
    return <Redirect href="/login" />
  }

  return <Redirect href="/home" />
}
