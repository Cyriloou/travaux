// a reducer is just a switch statement that handles each action we define.
// a reducer returns the new state, which in turn updates the Store.
import * as types from './types'

const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.TYPE_1:
      return {
        ...state,
      }
    default:
      return state
  }
}
