import { combineReducers } from 'redux'
import constReducer from 'Redux/modules/const'
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
  const: constReducer,
  toastr: toastrReducer, // <- Mounted at toastr.
})

export default rootReducer
