export const clearCookie = (cookie, domain, path) => {
  try {
    if (!!getCookie()) {
      const domain = domain || document.domain;
      const path = path || '/';
      const name = cookie.trim().split('=')[ 0 ];
      document.cookie = name + '=; expires=' + new Date + '; domain=' + domain + '; path=' + path;
    }
  } catch (err) {}
};

export const getCookie = () => { return document.cookie.split(';'); };

export const getCookieValue = (cookie) => cookie.split('=').pop();
