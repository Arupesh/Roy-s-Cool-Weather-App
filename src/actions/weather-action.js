
import Axios from 'axios';

const API_KEY = 'ce4c82c1aef611cba9900622a9c4bf6c';

export const SEARCH_CITY_WEATHER = 'SEARCH_CITY_WEATHER';

export function fetchWeatherData (payload) {
  
  return { 
  	type: SEARCH_CITY_WEATHER, 
  	payload
  }

};

//Async Action
export const makeWeatherApiCall = (state) => {
  
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${state},us&appid=${API_KEY}`;
  //http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
  console.log("Make apicall to  >> ", URL)
  return (dispatch) => {
    
    return Axios.get(URL)
      .then(response => {
        dispatch(fetchWeatherData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};