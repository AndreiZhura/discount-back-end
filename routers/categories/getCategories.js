const getRouteCategories = require('express').Router();

const {getCategories, getCotegoriesById} = require('../../controllers/categories/getCategories');

getRouteCategories.get('/categories',getCategories);
getRouteCategories.get('/categories/:_id', getCotegoriesById);

module.exports = getRouteCategories;