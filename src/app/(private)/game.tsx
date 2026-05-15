import { GameView } from "@/screens/game/game-view"
import { useGameViewModel } from "@/screens/game/use-game-view-model"

export default function Game() {
  const props = useGameViewModel()

  return <GameView {...props} />
}
