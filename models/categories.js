const mongoose = require('mongoose');

const categories = new mongoose.Schema({
    categories:{
        type:String,
        minlenght:2,
        maxlenght: 50,
    }
})

module.exports = mongoose.Schema('categories',categories);