const positionRouter = require('express').Router();

const {createPositions} = require('../controllers/positions');

positionRouter.post('/positions', createPositions);

module.exports = positionRouter;