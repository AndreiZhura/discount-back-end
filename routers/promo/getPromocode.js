const getPromocodeRouter = require('express').Router();

const {getPromocode,getPromocodeId} = require('../../controllers/promo/getPromocode')

getPromocodeRouter.get('/promocode', getPromocode);
getPromocodeRouter.get('/promocode/:_id', getPromocodeId);

module.exports = getPromocodeRouter;