const adminRouters = require('express').Router();
const { updateAdminMe, getAdminMe } = require('../controllers/getAdmin');
const { patchUserMe } = require('../validation/validationJoi');

adminRouters.get('/admin/me', getAdminMe);
adminRouters.patch('/admin/me', patchUserMe, updateAdminMe);

module.exports = adminRouters;
