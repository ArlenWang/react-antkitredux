import { combineReducers } from 'redux';
import homeTypes from './homeTypes';
import auth from './auth';
const AppReducer = combineReducers({
  homeTypes,
  auth,
});

export default AppReducer;
