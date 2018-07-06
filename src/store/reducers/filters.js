import mockInitialState from '../mockInitialState';
import { actionTypes } from '../../constants';

export default (state = mockInitialState.filters, action) => {
  switch (action.type) {
    case actionTypes.APPLY_FILTER:
      return {
        ...state,
        active: action.filter,
      };
    default:
      return state;
  }
};
