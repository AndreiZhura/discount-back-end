const mongoose = require('mongoose');

const categories = new mongoose.Schema({
    categories:{
        type: String,
        minlength: 2,
        maxlength: 20,
        required: true,
    }
})

module.exports = mongoose.model('categories',categories);