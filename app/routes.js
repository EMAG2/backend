const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const controllers = requireDir('./controllers');

/**
 * Generator Routes
 */

routes.post('/search', controllers.generatorController.search);


/**
 * Suport Routes
 */
routes.get('/suports', controllers.suportController.getSuports);
routes.get('/suports/open', controllers.suportController.getSuportsIsOpen);
routes.get('/suports/closed', controllers.suportController.getSuportsIsClosed);
routes.put('/suports/:id', controllers.suportController.toggleStatus);
routes.post('/suport', controllers.suportController.suport);

module.exports = routes;
