import { DifficultySelectionView } from "./difficulty-selection-view"
import { useDifficultySelectionViewModel } from "./use-difficulty-selection-view-model"

export const DifficultySelection = () => {
  const props = useDifficultySelectionViewModel()

  return <DifficultySelectionView {...props} />
}
