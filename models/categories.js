const mongoose = require('mongoose');

const categories = new mongoose.Schema({
    categories:{
        type: String,
        minlength: 2,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model('categories',categories);