import { destroyCookie } from 'nookies';
import { disableGA }     from './analytics';

export const clearCookies = (cookies) => {
  disableGA();
  Object.keys(cookies).forEach((key) => {
    if (key.includes('_g')) {
      console.log({ key });
      destroyCookie({}, key);
    }
  });
};
