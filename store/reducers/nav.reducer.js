import { GET_NAV_DATAS } from '../actions/nav.action';

const setFunction = (state, action) => ({ ...state, ...{ datas: action.payload} });

const navReducer = (state = { test: 'test test' }, action) => {
  switch (action.type) {
    case GET_NAV_DATAS:
      return setFunction(state, action);
    default:
      return state;
  }
};

export default navReducer;

