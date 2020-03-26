// a reducer is just a switch statement that handles each action we define.
// a reducer returns the new state, which in turn updates the Store.

const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
