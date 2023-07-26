const mongoose = require('mongoose');

const positions = new mongoose.Schema({
    name:{
     type:String
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
    categories:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"categories",
        require: true,
    }

})

module.exports = mongoose.model('positions', positions);

