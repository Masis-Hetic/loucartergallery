import { SET_COOKIES_DATAS } from '../actions/cookies.action';

const setCookiesStore = (state, action) => {
  return { ...state, ...action.payload };
};

const cookiesReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_COOKIES_DATAS:
      return setCookiesStore(state, action);
    default:
      return state;
  }
};

export default cookiesReducer;
