const Promocode = require('../models/promocode');

module.exports.createPromocode = (req, res) => {
    Promocode.create({
        promocode: req.body.promocode,
        date: req.body.date,
        position: req.body.position
    })
        .then((promocode) => {
            res.status(201).send({ data: promocode })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
}



module.exports.deletePromocode = (req, res) => {
    Promocode.findByIdAndDelete(req.params._id)
        .then((promocode) => {
            res.status(200).send({ data: promocode })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
};