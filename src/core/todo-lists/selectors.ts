import { RootState } from '../store'
import { todolistsAdapter } from './slice'

const todolistsSelectors = todolistsAdapter.getSelectors<RootState>(
  (state: RootState) => state.todolists
)

export const selectAllTodolists = (state: RootState) => {
  const todolists = todolistsSelectors.selectAll(state)
  return {
    todolists
  }
}