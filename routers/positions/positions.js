const positionRouter = require('express').Router();

const { createPositionsBarcode,  deletePosition, updatePositionTextId,createPositionsNoBarcode } = require('../../controllers/positions/positions');

const upload = require('../../middlewares/upload');
const imageAndBarcode = upload.fields([{name: 'image', maxCount: 1}, {name: 'barcode', maxCount: 1}]);
const image = upload.single("image")

positionRouter.post('/positions',imageAndBarcode, createPositionsBarcode);
positionRouter.post('/positions',image, createPositionsNoBarcode);
positionRouter.patch('/positions/:_id', updatePositionTextId);
positionRouter.delete('/positions/:_id', deletePosition);

module.exports = positionRouter;