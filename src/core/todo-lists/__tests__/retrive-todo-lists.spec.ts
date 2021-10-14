import { createStore } from '../../store'
import { selectors, useCases } from '../index'

describe('retrieve todo lists', () => {
  test('can retrieve empty todo list ', () => {
    // arrange
    // préparation du store
    const store = createStore()

    // act
    // dispatch an action
    // assert
    // selector = expected
    expect(selectors.selectAllTodolists(store.getState()))
      .toEqual({
      todolists: []
    })
  })

  test('can retrieve todo list with many blocks', () => {
    // arrange
    const store = createStore()

    // act
    store.dispatch(useCases.retrieveTodolists({
        todolists: [{
          id: 'id1',
          content: 'What do I do today',
      },{
          id: 'id2',
          content: 'I need to buy a mouse pad',
      }]
    }))
      
    // assert
    expect(selectors.selectAllTodolists(store.getState()))
      .toEqual({
        todolists: [{
          id: 'id1',
          content: 'What do I do today',
      },{
          id: 'id2',
          content: 'I need to buy a mouse pad',
      }]
    })
  })
})
