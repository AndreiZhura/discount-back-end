
const getPositionRouter = require('express').Router();

const {getPositions, getPositionsId} = require('../../controllers/positions/getPositions')

getPositionRouter.get('/positions', getPositions);
getPositionRouter.get('/positions/:_id', getPositionsId);

module.exports = getPositionRouter;