import { combineReducers } from 'redux';

import footerReducer from './footer.reducer.js';
import navReducer    from './nav.reducer';

export const reducers = { footer: footerReducer, nav: navReducer };

export const rootReducer = combineReducers({ ...reducers });
