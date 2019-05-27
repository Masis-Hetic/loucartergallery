export const sliceUrl = url => {
  if (!url) return false;
  return url.slice( 0, 6 ) === 'https:' ? url.substring( 6 ) : url;
};
