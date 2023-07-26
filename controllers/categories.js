const Categories = require('../models/categories');

module.exports.createCategories = (req,res) =>{
    const {categories} = req.body;

    Categories.create({categories})
    .then((categories)=>{
        res.status(200)
        .send({data: categories})
    })
    .catch((error)=>{
         res.status(400).send({message:error})
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