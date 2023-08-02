const Categories = require('../models/categories');

module.exports.createCategories = (req, res) => {
    const { categories } = req.body;

    Categories.create({ categories })
        .then((categories) => {
            res.status(201)
                .send({ data: categories })
        })
        .catch((error) => {
            res.status(400).send({ message: error })
        })
}

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

module.exports.deleteCategoriesById = (req, res) => {
    Categories.findByIdAndDelete(req.params._id)
        .then((categories) => {
            res.status(201).send({ data: categories })
        })
        .catch((error) => {
            res.status(400).send({ message: error })
        })
}

module.exports.updateCategory = (req,res) =>{
    Categories.findByIdAndUpdate(req.params._id, {...req.body})
    .then((categories) => {
        res.status(200).send({ data: categories })
    })
    .catch((error) => {
        res.status(400).send({ message: error });
    })
}