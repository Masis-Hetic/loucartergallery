import ReactGA from 'react-ga';

export const initGA = () => { ReactGA.initialize('UA-142143734-1', { alwaysSendToDefaultTracker: false }); };

export const disableGA = () => { window[ 'ga-disable-UA-142143734-1' ] = true; };

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
