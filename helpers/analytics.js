import Router  from 'next/router';
import ReactGA from 'react-ga';

export const initGA = () => {
  // window.GA_INITIALIZED = true;
  ReactGA.initialize('UA-142143734-1');
};

export const disableGA = () => {
  // window.GA_INITIALIZED = false;
  window[ 'ga-disable-UA-142143734-1' ] = true;
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
