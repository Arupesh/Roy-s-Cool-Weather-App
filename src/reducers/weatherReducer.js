import {SEARCH_CITY_WEATHER} from '../actions/weather-action';

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CITY_WEATHER:
    {	console.log("Reducer called success")
          return [action.payload, ...state];
      }
    default:
          return state;
  }
};