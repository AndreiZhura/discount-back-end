const Promocode = require('../models/promocode');

module.exports.createPromocode = (req, res) => {
    Promocode.create({
        promocode: req.body.promocode,
        position: req.body.position
    })
        .then((promocode) => {
            res.status(201).send({ data: promocode })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
}

module.exports.getPromocode = (req, res) => {
    Promocode.find({})
        .then((position) => {
            res.status(200).send({ data: position })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
};

module.exports.getPromocodeId = (req, res) => {
    Promocode.findById(req.params._id)
        .then((promocode) => {
            res.status(200).send({ data: promocode })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
};

module.exports.deletePromocode = (req, res) => {
    Promocode.findByIdAndDelete(req.params._id)
        .then((promocode) => {
            res.status(200).send({ data: promocode })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
};