const positionRouter = require('express').Router();

const {createPositions, getPositions,getPositionsId,deletePosition,updatePositionId} = require('../controllers/positions');

positionRouter.get('/positions', getPositions);
positionRouter.get('/positions/:_id',getPositionsId);
positionRouter.post('/positions', createPositions);
positionRouter.delete('/positions/:_id',deletePosition);
positionRouter.patch('/positions/:_id',updatePositionId);

module.exports = positionRouter;