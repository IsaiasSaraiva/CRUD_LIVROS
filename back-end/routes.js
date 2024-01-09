const ParametrosController = require('./Controllers/ParametrosController');

const routers = require('express').Router();

routers.post('/parametros', ParametrosController.store)


module.exports = routers;