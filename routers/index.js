
//Роуты
const router = require('express').Router();
//const auth = require('../middlewares/auth')
const routerAuth = require('./auth');
const routeCategories = require('./categories');
const getAdmin = require('./getAdmin');
const routerPosition = require('./positions');
const promocodeRouter = require('./promocode');

const getRouterCategories = require('./getCategories');
const getRouterPositions = require('./getPositions');
const getPromocode = require('./getPromocode');





router.use('/', routerAuth);
router.use('/', getRouterCategories);
router.use('/', getRouterPositions);
router.use('/', getPromocode);
//router.use(auth);
router.use('/', getAdmin);
router.use('/', routeCategories);
router.use('/', routerPosition);
router.use('/', promocodeRouter);

module.exports = router;