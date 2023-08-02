const Position = require('../models/positions');

module.exports.createPositions = (req, res) => {


    Position.create({
        name: req.body.name,
        image: req.files.image ? req.files.image: 'Такого файла нет',
        description: req.body.description,
        promocode: req.body.promocode,
        link: req.body.link,
        barcode: req.files.barcode ? req.files.barcode: 'Такого файла нет',
        date: req.body.date,
        category: req.body.category
    })
        .then((position) => {
            res.status(201).send({ data: position })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
};

module.exports.getPositions = (req, res) => {
    Position.find({})
        .then((position) => {
            res.status(200).send({ data: position })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
};

module.exports.getPositionsId = (req, res) => {
    Position.findById(req.params._id)
        .then((positions) => {
            res.status(200).send({ data: positions })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
};

module.exports.deletePosition = (req, res) => {
    Position.findByIdAndDelete(req.params._id)
        .then((positions) => {
            res.status(200).send({ data: positions })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
};

module.exports.updatePositionId = (req, res) => {

    Position.findByIdAndUpdate(req.params._id, { ...req.body })
        .then((positions) => {
            res.status(200).send({ data: positions })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
}