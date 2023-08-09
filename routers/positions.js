const positionRouter = require('express').Router();

const { createPositions, getPositions, getPositionsId, deletePosition, updatePositionTextId,updatePositionIdImage } = require('../controllers/positions');
const upload = require('../middlewares/upload');
const imageAndBarcode = upload.fields([{name: 'image', maxCount: 1}, {name: 'barcode', maxCount: 1}]);
const image = upload.single('image');

positionRouter.get('/positions', getPositions);
positionRouter.get('/positions/:_id', getPositionsId);
positionRouter.post('/positions',imageAndBarcode, createPositions);
//positionRouter.delete('/positions/:_id',  image, updatePositionIdImage)
positionRouter.patch('/positions/:_id', updatePositionTextId);
positionRouter.delete('/positions/:_id', deletePosition);

module.exports = positionRouter;