export const useDifficultySelectionViewModel = () => {
  const difficulties = [
    {
      id: "easy",
      label: "Fácil",
      icon: require("@/assets/icons/level-01.svg"),
    },
    {
      id: "medium",
      label: "Médio",
      icon: require("@/assets/icons/level-02.svg"),
    },
    {
      id: "hard",
      label: "Difícil",
      icon: require("@/assets/icons/level-03.svg"),
    },
  ]

  return {
    difficulties,
  }
}
