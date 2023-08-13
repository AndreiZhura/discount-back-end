const promocodeRouter = require('express').Router();

const {createPromocode,deletePromocode} = require('../controllers/promocode')

promocodeRouter.post('/promocode/',createPromocode);
promocodeRouter.delete('/promocode/:_id',deletePromocode);

module.exports = promocodeRouter;