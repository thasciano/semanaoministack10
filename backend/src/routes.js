const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// metodos http get, post, put, delete

// query params: [get] request.query (filtros, ordenação , paginação)
// route Params: [put, delete] request.params (identificação para alteração)
// Body: [post] request.body (dados para criação ou alteração de um registro)
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;