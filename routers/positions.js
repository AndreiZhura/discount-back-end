const positionRouter = require('express').Router();

const { createPositions, getPositions, getPositionsId, deletePosition, updatePositionId } = require('../controllers/positions');
//const upload = require('../middlewares/upload');
//const imageAndBarcode = upload.fields([{name: 'image', maxCount: 1}, {name: 'barcode', maxCount: 1}]);

positionRouter.get('/positions', getPositions);
positionRouter.get('/positions/:_id', getPositionsId);

positionRouter.post('/positions', createPositions);

positionRouter.patch('/positions/:_id', updatePositionId);
positionRouter.delete('/positions/:_id', deletePosition);

module.exports = positionRouter;