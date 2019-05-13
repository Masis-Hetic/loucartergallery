const routes = require('next-routes')();

// https://github.com/fridays/next-routes/blob/master/README.md

routes
  .add('home', '/', 'index');

module.exports = routes;
