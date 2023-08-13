const adminRouters = require('express').Router();
const { updateUserMe, getUsersMe } = require('../controllers/getAdmin');
const { patchUserMe } = require('../validation/validationJoi');

adminRouters.get('/admin/me', getUsersMe);
adminRouters.patch('/admin/me', patchUserMe, updateUserMe);

module.exports = adminRouters;
