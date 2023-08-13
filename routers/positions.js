const positionRouter = require('express').Router();

const { createPositions,  deletePosition, updatePositionTextId } = require('../controllers/positions');

const upload = require('../middlewares/upload');
const imageAndBarcode = upload.fields([{name: 'image', maxCount: 1}, {name: 'barcode', maxCount: 1}]);

positionRouter.post('/positions',imageAndBarcode, createPositions);
positionRouter.patch('/positions/:_id', updatePositionTextId);
positionRouter.delete('/positions/:_id', deletePosition);

module.exports = positionRouter;