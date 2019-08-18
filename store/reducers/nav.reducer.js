import { GET_NAV_DATAS, IS_NAV_OPEN } from '../actions/nav.action';

const setFunction = (state, action) => ({ ...state, ...{ datas: action.payload} });
const setNavStatus = (state, action) => ({ ...state, ...{ status: action.payload} });

const navReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_NAV_DATAS:
      return setFunction(state, action);
    case IS_NAV_OPEN:
      return setNavStatus(state, action);
    default:
      return state;
  }
};

export default navReducer;
