const routes = require('next-routes')();

routes
  .add('index', '/', 'index')
  .add('campagnes', '/campagnes/:slug', 'campagnes')
  .add('galerie', '/galerie', 'galerie')
  .add('contact', '/contact', 'contact')
  .add('la-fondatrice', '/la-fondatrice', 'fondatrice')
  .add('partager', '/partager', 'partager')
  .add('soon', '/soon', 'soon');

module.exports = routes;
