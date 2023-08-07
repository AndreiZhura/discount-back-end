const promocodeRouter = require('express').Router();

const {createPromocode,deletePromocode} = require('../controllers/promocode')

promocodeRouter.post('/promocode/',createPromocode);
promocodeRouter.delete('/promocode/',deletePromocode);