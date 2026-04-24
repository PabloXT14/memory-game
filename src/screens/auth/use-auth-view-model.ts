import { useState } from "react"

import { useAuthStore } from "@/shared/stores/auth-store"

export const useAuthViewModel = () => {
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated)

  const [username, setUsername] = useState("")

  const handleAuthentication = () => {
    if (username.trim() === "") {
      // Você pode adicionar uma mensagem de erro ou feedback para o usuário aqui
      return
    }

    setAuthenticated(username.trim())
  }

  return {
    username,
    setUsername,
    handleAuthentication,
  }
}
