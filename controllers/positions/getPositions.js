const Position = require('../../models/positions');

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