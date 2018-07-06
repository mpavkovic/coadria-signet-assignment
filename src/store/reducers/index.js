import { combineReducers } from 'redux';

import filters from './filters';
import layers from './layers';
import locations from './locations';

export default combineReducers({
  filters,
  layers,
  locations,
});
