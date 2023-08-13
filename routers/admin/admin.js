const routerAdmin = require('express').Router();

const {getAdminMe} = require('../../controllers/admin/admin');

routerAdmin.get('/admin/me', getAdminMe);

module.exports = routerAdmin;