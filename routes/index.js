const productsRoutes = require('./products.routes');
const clientsRoutes = require('./clients.routes');

exports.registrarRotas = function (app) {
  app.use('/products', productsRoutes);
  app.use('/clients', clientsRoutes);
};
