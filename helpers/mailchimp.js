export const news = (req, res, next) => {
  const email = req.body.email; // Email entered
  const dataCenter = 'us1';
  const apiKey = 'c03e070b4411f258d90f5b7e834aecf8-us20';
  const listID = 'LIST_ID';
  
  const options = {
    url    : ``,
    method : 'POST',
    headers: { 'content-type': 'application/json', 'Authorization': `apikey ${ apiKey }` },
    body   : JSON.stringify({ email_address: email, status: 'subscribed' }),
  };
  
  request(options,  (error, response, body) => {
    try {
      let respObj = {};
      if (response.statusCode === 200) {
        respObj = { success: `` }
      } else {
        respObj = { error: `` }
      }
      res.send(respObj);
    } catch (e) {
      const respErrorObj = { error: `` }
      res.send(respErrorObj);
    }
  });
  next();
};
