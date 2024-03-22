const routerAuth = require('express').Router();

const {createAdmin, login} = require('../../controllers/auth/auth');

routerAuth.post('/signup', createAdmin);
routerAuth.post('/signin', login);


module.exports = routerAuth;