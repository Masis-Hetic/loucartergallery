const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cors());
  server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  server.get('/campagnes/:slug', (req, res) => app.render(req, res, '/campagnes', Object.assign({ slug: req.params.slug })));

  server.get('/la-fondatrice', (req, res) => app.render(req, res, '/la-fondatrice'));

  server.get('/artistes/:page', (req, res) => app.render(req, res, '/artistes/page-[page]', Object.assign({ page: req.params.page })));

  server.get('/eshop', (req, res) => app.render(req, res, '/eshop'));

  server.get('*', (req, res) => handle(req, res));

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
