const routerAdmin = require('express').Router();

const {createAdmin, login} = require('../controllers/admins');

routerAdmin.post('/signup', createAdmin);
routerAdmin.post('/signin', login);


module.exports = routerAdmin;