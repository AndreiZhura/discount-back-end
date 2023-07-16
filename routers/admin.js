const routerAdmin = require('express').Router();

const {createAdmin} = require('../controllers/admins');

routerAdmin.post('/signup', createAdmin);

module.exports = routerAdmin;