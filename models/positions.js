const mongoose = require('mongoose');


const positions = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    image: {
        type: Array,
    },
    description: {
        type: String,
    },
    link: {
        type: String,
    },
    barcode: {
        type: Array
    },
    fullTerms:{
        type: String,
    },
    category: {
        ref: 'categories',
        type: mongoose.Schema.Types.ObjectId,
    }

})

module.exports = mongoose.model('positions', positions);

