const routers = require('express').Router();

//Роуты
const routerAuth = require('./auth/auth');
const routeCategories = require('./categories/categories');
const routerPosition = require('./positions/positions');
const promocodeRouter = require('./promo/promocode');
const getRouterCategories = require('./categories/getCategories');
const getRouterPositions = require('./positions/getPositions');
const getPromocode = require('./promo/getPromocode');
const autch = require('../middlewares/autch');
const admin = require('./admin/admin')


routers.use('/', routerAuth);
routers.use('/', getRouterCategories);
routers.use('/', getRouterPositions);
routers.use('/', getPromocode);
routers.use('/',autch);
routers.use('/',admin);
routers.use('/', routeCategories);
routers.use('/', routerPosition);
routers.use('/', promocodeRouter);

module.exports = routers;