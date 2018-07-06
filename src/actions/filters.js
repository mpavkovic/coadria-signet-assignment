import { actionTypes } from '../constants';

function applyFilter(filter) {
  return {
    type: actionTypes.APPLY_FILTER,
    filter,
  };
}

export default {
  applyFilter,
};
