export const sliceUrl = url => {
  if (!url) return false;
  return url.slice( 0, 6 ) === 'https:' ? url.substring( 6 ) : url.slice( 0, 5 ) === 'http:' ? url.substring( 5 ) : url;
};

export const validateEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email);
};
