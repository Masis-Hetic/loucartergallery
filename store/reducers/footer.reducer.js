import { GET_FOOTER_DATAS } from '../actions/footer.action';

const setFunction = (state, action) => ({ ...state, ...{ datas: action.payload} });

const footerReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FOOTER_DATAS:
      return setFunction(state, action);
    default:
      return state;
  }
};

export default footerReducer;
