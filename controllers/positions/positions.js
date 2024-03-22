const { none } = require('../../middlewares/upload');
const Position = require('../../models/positions');
var fs = require('fs');


module.exports.createPositions = (req, res) => {
    const { name, image, description, link, barcode, fullTerms, category } = req.body

    if (barcode === '') {
        NoBarcode(req, res)
    }
    else {
        Barcode(req, res)
    }

};

const NoBarcode = (req, res) => {

    const imageMap = req.files.image.map(value => { return value.path; })

    Position.create({
        name: req.body.name,
        image: req.files.image ? imageMap : 'Такого файла нет',
        description: req.body.description,
        link: req.body.link,
        barcode: req.files.barcode === '' ? '' : null,
        fullTerms: req.body.fullTerms,
        category: req.body.category
    })
        .then((position) => {
     
            res.status(201).send({ data: position })
          
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
}

const Barcode = (req, res) => {
    const imageMap = req.files.image.map(value => { return value.path; })
    const barcodeMap = req.files.barcode.map(value => { return value.path; })
    Position.create({
        name: req.body.name,
        image: req.files.image ? imageMap : 'Такого файла нет',
        description: req.body.description,
        link: req.body.link,
        barcode: req.files.barcode ? barcodeMap : 'Такого файла нет',
        fullTerms: req.body.fullTerms,
        category: req.body.category
    })
        .then((position) => {
        
            res.status(201).send({ data: position })
        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
}




module.exports.updatePositionTextId = (req, res) => {
    Position.findByIdAndUpdate(req.params._id, {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        fullTerms: req.body.fullTerms,
        category: req.body.category
    })
        .then((positions) => {
            res.status(200).send({ data: positions })
        })
        .catch((error) => {
       
            res.status(400).send({ message: error });
        })
}


module.exports.deletePosition = (req, res) => {
    Position.findByIdAndDelete(req.params._id)
        .then((positions) => {
            if (positions.barcode === null) {
                const filePathImage = positions.image.map((value) => {
                    return value
                });
                fs.unlinkSync(`${filePathImage}`);
                res.status(200).send({ data: positions })
            }
            else {
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




        })
        .catch((error) => {
            res.status(400).send({ message: error });
        })
};