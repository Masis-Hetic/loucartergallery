import { OVERFLOW_STATUS } from "../actions/controlOverflow.action";

const setOverflow = ( state, action ) => ( { ...state, ...{ data: action.payload } } );

const overflowReducer = ( state = {}, action ) => {
  if (action.type === OVERFLOW_STATUS) {
    return setOverflow(state, action);
  }
  return state;
};

export default overflowReducer;
