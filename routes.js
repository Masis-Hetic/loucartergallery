const routes = require('next-routes')();

routes
  .add('index', '/', 'index')
  .add('about', '/about', 'about');

module.exports = routes;
