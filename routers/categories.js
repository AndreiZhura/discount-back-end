const routeCategories = require('express').Router();

const {createCategories,  deleteCategoriesById,updateCategory} = require('../controllers/categories');


routeCategories.post('/categories', createCategories);
routeCategories.patch('/categories',updateCategory);
routeCategories.delete('/categories',deleteCategoriesById)


module.exports = routeCategories;