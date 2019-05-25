const routes = require('next-routes')();

routes
  .add('index', '/', 'index')
  .add('campagnes', '/campagnes/:slug', 'campagnes')
  .add('galerie', '/galerie', 'galerie')
  .add('contact', '/contact', 'contact')
  .add('la-fondatrice', '/la-fondatrice', 'fondatrice');

module.exports = routes;
