import { combineReducers } from 'redux';
import {fetchData} from './fetchData';
import { tick } from './tick'


const rootReducer = combineReducers({
	fetchData,
  tick
});

export default rootReducer;

