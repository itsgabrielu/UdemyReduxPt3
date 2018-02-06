import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // console.log('fetch_weather trigger', [action.payload.data, ...state])
      // return state.concat([ action.payload.data ]) //identical to line below
      return [action.payload.data, ...state]
  }
  return state
}
