const Position = require('../../models/positions');
var fs = require('fs');


module.exports.createPositions = (req, res) => {

    const image = req.files.image.map(value => { return value.path; })
    const barcode = req.files.barcode.map(value => { return value.path; })


    Position.create({
        name: req.body.name,
        image: req.files.image ? image : 'Такого файла нет',
        description: req.body.description,
        link: req.body.link,
        barcode: req.files.barcode ? barcode : 'Такого файла нет',
        category: req.body.category
    })
        .then((position) => {
            res.status(201).send({ data: position })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
};

module.exports.updatePositionTextId = (req, res) => {
    Position.findByIdAndUpdate(req.params._id, {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        category: req.body.category
    })
        .then((positions) => {
            res.status(200).send({ data: positions })
        })
        .catch((error) => {
            console.log(req.params._id)
            res.status(400).send({ message: error });
        })
}


module.exports.deletePosition = (req, res) => {
    Position.findByIdAndDelete(req.params._id)
        .then((positions) => {

            if (positions.image && positions.barcode) {
                const filePathImage = positions.image.map((value) => {
                    return value
                });

                fs.unlinkSync(`${filePathImage}`);
                const filePathBarcode = positions.barcode.map((value) => {
                    return value
                });

                fs.unlinkSync(`${filePathBarcode}`);
                res.status(200).send({ data: positions })
            }

            else if (positions.image) {
                const filePathImage = positions.image.map((value) => {
                    return value
                });

                fs.unlinkSync(`${filePathImage}`);
                res.status(200).send({ data: positions })
            }
            else if (positions.barcode) {

                const filePathBarcode = positions.barcode.map((value) => {
                    return value
                });

                fs.unlinkSync(`${filePathBarcode}`);
                res.status(200).send({ data: positions })
            }


        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
};