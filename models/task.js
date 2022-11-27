const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
    workersName:{
        type:String,
        required:true,
        
    },
    jobType:{
        type:String,
        required:true,
    },
    note:{
        type:String,
        required:false,
    },
    deadline:{
        type:Date,
        required:false,
    },
    duration:{
        type:String,
        required:false,
    },
    fieldName:{
        type:String,
        required:true,
    },


});
module.exports = mongoose.model('Task', TaskSchema);
