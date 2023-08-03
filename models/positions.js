const mongoose = require('mongoose');
var moment = require('moment');

const date = moment().format('DDMMYYYY-HHmmss');


const positions = new mongoose.Schema({
    name:{
     type:String,
     required: true,
    },
    image:{
        type:String,
    },
    description:{
        type:String,
    },
    promocode:{
        type:String
    },
    link:{
        type:String,
    },
    barcode:{
        type:String
    },
    date:{
        type:String,
    },
    category:{
        ref:'categories',
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }

})

module.exports = mongoose.model('positions', positions);

