export const sliceUrl = url => {
  if (!url) return false;
  return url.slice( 0, 7 ) === 'https:' ? url.substring( 7 ) : url.slice( 0, 6 ) === 'http:' ? url.substring( 6 ) : url;
};

export const validateEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email);
};
