const express = require('express');
const homepageController = require('./controllers/homepageController');
const routes = express.Router();
const userController = require('./controllers/userController')

//rota homepage
routes.get('/', homepageController.index);

//rotas users
routes.get('/users', userController.index);
routes.post('/users', userController.create);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

module.exports = routes;