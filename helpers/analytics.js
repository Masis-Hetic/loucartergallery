import ReactGA           from 'react-ga';
import { destroyCookie } from 'nookies';

export const initGA = () => { ReactGA.initialize('UA-142143734-1', { alwaysSendToDefaultTracker: false }); };

export const disableGA = (cookies) => {
  window[ 'ga-disable-UA-142143734-1' ] = true;
  Object.keys(cookies).forEach((key) => { if (key.includes('_g')) { destroyCookie({}, key); } });
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
