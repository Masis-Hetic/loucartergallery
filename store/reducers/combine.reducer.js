import { combineReducers } from 'redux';

import footerReducer      from './footer.reducer.js';
import navReducer         from './nav.reducer';
import cookiesReducer     from './cookies.reducer';
import overflowReducer    from "./controlOverflow.reducer";
import navPositionReducer from "./navPosition.reducer";

export const reducers = {
  footer: footerReducer,
  nav: navReducer,
  cookies: cookiesReducer,
  overflow: overflowReducer,
  navPosition: navPositionReducer,
};

export const rootReducer = combineReducers( { ...reducers } );
