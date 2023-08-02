const positionRouter = require('express').Router();

const { createPositions, getPositions, getPositionsId, deletePosition, updatePositionId } = require('../controllers/positions');
const upload = require('../middlewares/upload')

positionRouter.get('/positions', getPositions);
positionRouter.get('/positions/:_id', getPositionsId);

positionRouter.post('/positions', upload.fields([
    { name: 'image' },
    { name: 'barcode' }]),
    createPositions);

positionRouter.patch('/positions/:_id', upload.fields([
    { name: 'image' },
    { name: 'barcode' }]), updatePositionId);
positionRouter.delete('/positions/:_id', deletePosition);

module.exports = positionRouter;