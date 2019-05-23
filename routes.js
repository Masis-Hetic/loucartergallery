const routes = require('next-routes')();

routes
  .add('index', '/', 'index')
  .add('gallery', '/gallery', 'gallery')
  .add('contact', '/contact', 'contact')
  .add('founder', '/founder', 'founder')
  .add('campagne', '/campagne/:slug', 'campagne');

module.exports = routes;
