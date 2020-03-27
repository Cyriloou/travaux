/*
 * action creators
 */
import * as types from './types'
import axios from 'axios'
const MAX_QTY = 30
const DEFAULT_PATH = 'newstories'
const onError = error => ({ type: types.ERROR_GENERATED, error })

function getItems(id) {
  return axios.get(`/item/${id}.json`)
}

export const fetchDetails = itemType => (dispatch, getState) => {
  const state = getState()
  const ids = itemType ? state.items.list[itemType] : state.items.list[DEFAULT_PATH]
  if (!ids || ids.length <= 0) return
  const start = state.items.details[itemType || DEFAULT_PATH]
    ? state.items.details[itemType || DEFAULT_PATH].length
    : 0
  if (start >= ids.length) return
  axios
    .all(ids.slice(start, start + MAX_QTY).map(id => getItems(id)))
    .then(
      axios.spread((...responses) => {
        responses = responses.map(response => response.data)
        const payload = {
          key: itemType || DEFAULT_PATH,
          values: responses,
        }
        dispatch(initStoriesDetails(payload))
      })
    )
    .catch(err => dispatch(onError(err)))
}

// Fetch list of stories
export const fetchStoriesLists = () => dispatch => {
  dispatch(fetchSneakersBegin)
  const pathList = ['askstories', 'topstories', 'newstories']
  axios
    .all(pathList.map(e => axios.get(`/${e}.json`)))
    .then(
      axios.spread((...responses) => {
        const payload = {
          [pathList[0]]: responses[0].data,
          [pathList[1]]: responses[1].data,
          [pathList[2]]: responses[2].data,
        }
        dispatch(initStories(payload))
      })
    )
    .catch(err => dispatch(onError(err)))
}

export const fetchSneakersBegin = () => ({
  type: types.START_FETCHING,
})

export const initStories = payload => ({
  type: types.INIT_STORIES,
  payload,
})

export const initStoriesDetails = payload => ({
  type: types.INIT_STORIES_DETAILS,
  payload,
})
