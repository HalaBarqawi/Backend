const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
    workersName:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Worker',
        required:true,
        
    }],
    jobType:[{
        type:String,
        required:true,
    }],
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
    fieldName:[{
        type:String,
        required:true,
    }],

    isDone:{
        type:Boolean,
        required:true
    },
    taskStatues:{
        type:String,
        required:false
    },
    submitDate:{
        type:Date,
        required:false,

    }
    
    
});
module.exports = mongoose.model('Task', TaskSchema);
