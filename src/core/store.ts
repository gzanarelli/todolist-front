import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todolistsSlice } from './todo-lists/slice';
const rootReducer = combineReducers({
    [todolistsSlice.name]: todolistsSlice.reducer
  })

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = () => {
  const store = configureStore({
    reducer: combineReducers({
      [todolistsSlice.name]: todolistsSlice.reducer
    })
  })

  return store
}