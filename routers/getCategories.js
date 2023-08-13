const getRouteCategories = require('express').Router();

const {getCategories, getCotegoriesById} = require('../controllers/getCategories');

getRouteCategories.get('/categories',getCategories);
getRouteCategories.get('/categories/:_id', getCotegoriesById);

module.exports = getRouteCategories;