import { DifficultySelectionView } from "./difficulty-selection-view"
import {
  useDifficultySelectionViewModel,
  type DifficultySelectionViewModelProps,
} from "./use-difficulty-selection-view-model"

type DifficultySelectionProps = DifficultySelectionViewModelProps

export const DifficultySelection = (props: DifficultySelectionProps) => {
  const viewModel = useDifficultySelectionViewModel({ ...props })

  return <DifficultySelectionView {...viewModel} />
}
