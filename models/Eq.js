const mongoose = require('mongoose');

let EqSchema = new mongoose.Schema({
    eqName:{
        type:String,
        required:true,
        
    },
    amount:{
        type: Number,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },


});
module.exports = mongoose.model('Equipment', EqSchema);
