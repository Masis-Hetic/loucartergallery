import { NAV_POSITION } from '../actions/navPosition.action';

const initialState = { data: false };

const isNavFixed = (state, action) => ({ ...state, ...{ data: action.payload } });

const navPositionReducer = (state = initialState, action) => {
  if (action.type === NAV_POSITION) { return isNavFixed(state, action); }
  return state;
};

export default navPositionReducer;
