import { combineReducers } from 'redux';
import translateReducer from './translateReducer';

const rootReducer = combineReducers({ translateReducer });

export default rootReducer;
