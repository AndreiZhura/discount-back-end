const routeCategories = require('express').Router();

const {createCategories} = require('../controllers/categories');

routeCategories.post('/categories', createCategories);

module.exports = routeCategories;