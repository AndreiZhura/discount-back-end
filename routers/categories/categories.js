const routeCategories = require('express').Router();

const {createCategories,  deleteCategoriesById,updateCategory} = require('../../controllers/categories/categories');


routeCategories.post('/categories', createCategories);
routeCategories.patch('/categories:_id',updateCategory);
routeCategories.delete('/categories/:_id',deleteCategoriesById)


module.exports = routeCategories;