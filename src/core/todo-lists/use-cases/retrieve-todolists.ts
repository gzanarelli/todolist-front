import { createAction } from '@reduxjs/toolkit'

export const retrieveTodolists = createAction<{
  todolists: Array<{
      id: string,
      content: string
  }>
}>('todolists/retrieveTodolists')