const routeCategories = require('express').Router();

const {createCategories, getCategories} = require('../controllers/categories');

routeCategories.post('/categories', createCategories);
routeCategories.get('/categories',getCategories);

module.exports = routeCategories;