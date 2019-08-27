import { destroyCookie, setCookie } from 'nookies';

import { disableGA } from './analytics';

export const clearCookies = (cookies) => {
  disableGA();
  // Object.keys(cookies).forEach((key) => { if (key.includes('_g')) { destroyCookie({}, key); } });
  // Object.keys(cookies).forEach((key) => { if (key.includes('_g')) { setCookie({}, key, '', { path: '/' }); } });
};
