
//Роуты
const router = require('express').Router();
const routerAuth = require('./auth');
const routeCategories = require('./categories');
//const getAdmin = require('./routers/getAdmin');
const routerPosition = require('./positions');
const promocodeRouter = require('./promocode');

const getRouterCategories = require('./getCategories');
const getRouterPositions = require('./getPositions');
const getPromocode = require('./getPromocode');

const autch = require('./middlewares/auth')




router.use('/', routerAuth);
router.use('/', getRouterCategories);
router.use('/', getRouterPositions);
router.use('/', getPromocode);
router.use('/',autch);
//app.use('/', getAdmin);
router.use('/', routeCategories);
router.use('/', routerPosition);
router.use('/', promocodeRouter);

module.exports = router;