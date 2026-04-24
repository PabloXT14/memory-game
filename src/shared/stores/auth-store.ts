import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

export type User = {
  id: string
  name: string
  createdAt: string
}

type AuthStore = {
  user: User | null
  setAuthenticated: (name: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setAuthenticated: (name) => {
        const newUser: User = {
          id: `user-${Date.now()}`,
          name,
          createdAt: new Date().toISOString(),
        }

        set({ user: newUser })
      },
      logout: () => set({ user: null }),
    }),
    {
      name: "@memory-game:auth-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
