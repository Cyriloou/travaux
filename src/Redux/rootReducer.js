import { combineReducers } from 'redux'
import constReducer from 'Redux/modules/const'
import itemsReducer from 'Redux/modules/items'
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
  const: constReducer,
  toastr: toastrReducer, // <- Mounted at toastr.
  items: itemsReducer,
})

export default rootReducer
