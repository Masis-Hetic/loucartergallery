const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
// const handler = routes.getRequestHandler(app);
const handler = routes.getRequestHandler( app, ( { req, res, route, query } ) => {
  console.log('s', query);
  console.log('s', req);
  return app.render( req, res, route.page, query );
} );

const { createServer } = require('http');

app.prepare().then(() => {
  createServer(handler).listen(3000);
});
