
const Categories = require('../models/categories');

module.exports.getCategories = (req, res) => {
    Categories.find({})
        .then((categories) => {
            res.status(200).send({ data: categories })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
};

module.exports.getCotegoriesById = (req, res) => {
    Categories.findById(req.params._id)
        .then((categories) => {
            res.status(200).send({ data: categories })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
}