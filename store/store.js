import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools }          from 'redux-devtools-extension';
import thunkMiddleware                  from 'redux-thunk';

import { rootReducer } from './reducers/combine.reducer';

const exampleInitialState = {};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
