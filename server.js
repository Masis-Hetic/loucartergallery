const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/campagnes/:slug', (req, res) => {
    return app.render(req, res, '/campagnes', Object.assign({ slug: req.params.slug }));
  });

  server.get('/la-fondatrice', (req, res) => {
    return app.render(req, res, '/la-fondatrice');
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`)
  })
});


// const next = require('next');
// const routes = require('./routes');
//
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dir: '.', dev });
// // const handler = routes.getRequestHandler(app);
// const handler = routes.getRequestHandler( app, ( { req, res, route, query } ) => {
//   console.log('s', query);
//   console.log('s', req);
//   return app.render( req, res, route.page, query );
// } );
//
// const { createServer } = require('http');
//
// app.prepare().then(() => {
//   createServer(handler).listen(3000);
// });
