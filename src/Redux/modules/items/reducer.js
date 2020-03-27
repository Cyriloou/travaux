// a reducer is just a switch statement that handles each action we define.
// a reducer returns the new state, which in turn updates the Store.
import * as types from './types'
import { updateIn, set } from 'immutable'

const initialState = {
  list: {},
  details: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.INIT_STORIES:
      return set(state, 'list', action.payload)
    case types.INIT_STORIES_DETAILS:
      return updateIn(state, ['details', action.payload.key], val =>
        val ? [...val, ...action.payload.values] : action.payload.values
      )
    default:
      return state
  }
}
