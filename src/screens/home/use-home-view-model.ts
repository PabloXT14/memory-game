import { useAuthStore } from "@/shared/stores/auth-store"

export const useHomeViewModel = () => {
  const logout = useAuthStore((state) => state.logout)

  return {
    logout,
  }
}
