import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { retrieveTodolists } from './use-cases/retrieve-todolists';

interface Todolist {
  id: string;
  content: string;
}

export const todolistsAdapter = createEntityAdapter<Todolist>()

export const todolistsSlice = createSlice({
  name: 'todolists',
  initialState: todolistsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveTodolists, (state, action) => {
      todolistsAdapter.setAll(state, action.payload.todolists)
    })
  }
})
