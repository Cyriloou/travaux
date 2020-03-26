// src/redux/store/index.js
//Import the reducer to export it with the reducer.
import rootReducer from './rootReducer'
//import createStore that will create a store from redux.
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const preloadedState = {}
const middleware = [thunk]

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
)
const store = createStore(rootReducer, preloadedState, enhancer)

export default store
