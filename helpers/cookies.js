export const clearCookie = (name, domain, path) => {
  try {
    
    if (getCookie(name)) {
      let domain = domain || document.domain;
      let path = path || '/';
      document.cookie = name + '=; expires=' + new Date + '; domain=' + domain + '; path=' + path;
    }
  } catch (err) {}
};

export const getCookie = () => { return document.cookie.split(';'); };
