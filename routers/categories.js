const routeCategories = require('express').Router();

const {createCategories, getCategories, getCotegoriesById, deleteCategoriesById,updateCategory} = require('../controllers/categories');

routeCategories.get('/categories',getCategories);
routeCategories.get('/categories/:_id', getCotegoriesById)
routeCategories.post('/categories', createCategories);
routeCategories.patch('/categories',updateCategory);
routeCategories.delete('/categories',deleteCategoriesById)


module.exports = routeCategories;