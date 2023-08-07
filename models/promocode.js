const mongoose = require('mongoose');


const promocode = new mongoose.Schema({

 promocode:{
    promo,
    date:{
        type: Date,
        default: Date.now(),
    },
    position:{
        ref: 'positions',
        type: mongoose.Schema.Types.ObjectId,
    }
 }

})

module.exports = mongoose.model('promocode', promocode);
