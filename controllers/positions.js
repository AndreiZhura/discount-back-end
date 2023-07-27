
const positions = require('../models/positions');
const Position = require('../models/positions');

module.exports.createPositions = (req, res) => {

   
    Position.create({ ...req.body})
        .then((position) => {
            res.status(200).send({ data: position })
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

module.exports.getPositionsId = (req,res) =>{
    Position.findById(req.params._id)
    .then((positions)=>{
        res.status(200).send({message:positions})
    })
    .catch((error)=>{
        res.status(400).send({ message: error });
    })
};

module.exports.deletePosition = (req,res) =>{
     Position.findByIdAndDelete(req.params._id)
     .then((positions)=>{
        res.status(200).send({message:positions})
    })
    .catch((error)=>{
        res.status(400).send({ message: error });
    })
};

module.exports.updatePositionId = (req,res) =>{
    const { image, description, promocode, link, barcode, categoriesId } = req.body;
    Position.findByIdAndUpdate(req.params._id, {...req.body})
    .then((positions)=>{
        res.status(200).send({message:positions})
    })
    .catch((error)=>{
        res.status(400).send({ message: error });
    })
}