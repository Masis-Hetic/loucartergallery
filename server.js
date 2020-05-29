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
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  server.get(
    '/:lang/campagnes/:slug',
    (req, res) => app.render(req, res, '/campagnes', Object.assign({ slug: req.params.slug, lang: req.params.lang }))
  );

  server.get('/:lang/la-fondatrice', (req, res) => app.render(req, res, '/la-fondatrice', Object.assign({ lang: req.params.lang })));

  server.get('/la-fondatrice', (req, res) => app.render(req, res, '/la-fondatrice', Object.assign({ lang: req.params.lang })));

  server.get(
    '/:lang/artistes/:page',
    (req, res) => app.render(req, res, '/artistes/page-[page]', Object.assign({ page: req.params.page, lang: req.params.lang }))
  );

  server.get(
      '/:lang/galerie',
      (req, res) => app.render(req, res, '/galerie', Object.assign({ lang: req.params.lang }))
  )

  server.get(
      '/galerie',
      (req, res) => app.render(req, res, '/galerie', Object.assign({ lang: req.params.lang }))
  )

  server.get(
    '/:lang/artiste/:name',
    (req, res) => app.render(req, res, '/artiste/[name]', Object.assign({ name: req.params.name, lang: req.params.lang }))
  );

  server.get(
    '/:lang/collections/:collection',
    (req, res) => app.render(req, res, '/collections/[collection]', Object.assign({ collection: req.params.collection, lang: req.params.lang }))
  );

  server.get('/:lang', (req, res) => app.render(req, res, '/', Object.assign({ lang: req.params.lang })));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${ port }`);
  });
});

