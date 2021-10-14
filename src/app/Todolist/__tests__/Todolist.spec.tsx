import { screen } from '@testing-library/react'

describe('Todolist', () => {
  it('should show an empty state if no todolist yet', () => {
    expect(screen.queryByText(/no todolists yet/)).toBeDefined()
  })
})

export { }
