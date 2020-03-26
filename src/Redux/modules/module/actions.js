/*
 * action creators
 */
import * as types from './types'

export const fetchSneakersBegin = () => ({
  type: types.TYPE_1,
})

export const fetchSearchSneakersSuccess = payload => ({
  type: types.TYPE_1,
  payload: payload,
})
