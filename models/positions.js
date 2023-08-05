const mongoose = require('mongoose');
var moment = require('moment');

const date = moment().format('DDMMYYYY-HHmmss');


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
    promocodeData: [{
        promocode: String,
        date: {
            type: Date,
            default: Date.now(),
        },
    }],
    link: {
        type: String,
    },
    barcode: {
        type: Array
    },
    category: {
        ref: 'categories',
        type: mongoose.Schema.Types.ObjectId,
    }

})

module.exports = mongoose.model('positions', positions);

