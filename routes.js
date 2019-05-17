const routes = require('next-routes')();

routes
  .add('index', '/', 'index')
  .add('gallery', '/gallery', 'gallery')
  .add('contact', '/contact', 'contact')
  .add('founder', '/founder', 'founder');

module.exports = routes;
