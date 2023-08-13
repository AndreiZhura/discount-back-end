const routerAdmin = require('express').Router();

const {createAdmin, login} = require('../controllers/auth');

routerAdmin.post('/signup', createAdmin);
routerAdmin.post('/signin', login);


module.exports = routerAdmin;