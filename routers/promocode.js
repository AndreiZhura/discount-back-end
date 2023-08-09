const promocodeRouter = require('express').Router();

const {createPromocode,deletePromocode,getPromocode,getPromocodeId} = require('../controllers/promocode')


promocodeRouter.get('/promocode', getPromocode);
promocodeRouter.get('/promocode/:_id', getPromocodeId);
promocodeRouter.post('/promocode/',createPromocode);
promocodeRouter.delete('/promocode/:_id',deletePromocode);

module.exports = promocodeRouter;