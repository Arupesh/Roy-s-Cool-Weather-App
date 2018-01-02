
import {combineReducers} from 'redux';  
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({  
  // short hand property names
  weather : weatherReducer
})

export default rootReducer; 