const routes = require('next-routes')();

routes
  .add('index', '/', 'index')
  .add('campagnes', '/campagnes/:slug', 'campagnes')
  .add('galerie', '/galerie', 'galerie')
  .add('contact', '/contact', 'contact')
  .add('la-fondatrice', '/la-fondatrice', 'fondatrice')
  .add('partager', '/partager', 'partager')
  .add('artistes', '/artistes', 'artistes')
  .add('legal-notice', '/legal-notice', 'legal-notice');

module.exports = routes;
