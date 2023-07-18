const mongoose = require('mongoose');

const admin = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        minlenght: 2,
        maxlenght: 50,
       
    },
    password:{
        type:String,
        require: true,
    },
    name:{
        type: String,
        require:true,
        minlenght: 2,
        maxlenght: 50,
    },
    role:{
        type:String,
        default: 'admin'
    },
})

module.exports = mongoose.model('admins',admin);