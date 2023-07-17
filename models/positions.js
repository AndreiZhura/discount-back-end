const mongoose = require('mongoose');

const positions = new mongoose.Schema({
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
    


});

module.exports = mongoose.model('position', positions);
