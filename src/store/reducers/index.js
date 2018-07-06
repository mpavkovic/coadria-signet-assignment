import { combineReducers } from 'redux';
import filters from './filters';
import locations from './locations';

export default combineReducers({
  filters,
  locations,
});
