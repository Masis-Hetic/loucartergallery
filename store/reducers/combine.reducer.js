import { combineReducers } from 'redux';

import footerReducer from './footer.reducer.js';
import navReducer    from './nav.reducer';
import cookiesReducer    from './cookies.reducer';

export const reducers = { footer: footerReducer, nav: navReducer, cookies: cookiesReducer };

export const rootReducer = combineReducers({ ...reducers });
