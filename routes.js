// routes.js
const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('index', '/');
routes.add('OrdersRoute', '/orders');