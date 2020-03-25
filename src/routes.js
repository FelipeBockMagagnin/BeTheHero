const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        evento: 'semana omnistack',
        teste: 'teste'
    })
})


module.exports = routes;