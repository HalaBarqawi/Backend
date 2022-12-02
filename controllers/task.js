const Task= require('../models/task')
const Eq= require('../models/Eq')

const sharp = require('sharp');
exports.addTask=async(req,res)=>{
    const{workersName, fieldName, deadline,jobType, isDone,duration ,note} = req.body;
    
    
    const task = await Task({workersName, fieldName, deadline,jobType,isDone, duration ,note});
    await task.save();
   //const token =jwt.sign({userId:user._id},'MY_SECRET_KEY');
    res.json({ success: true, task });
   
  };
  
  exports.addEq=async (req,res)=>{
    const{eqName, amount, price}=req.body;
    const eq= await Eq({eqName, amount, price});
    await eq.save();
    res.json({success:true , eq})
  
  }

  exports.UserTasks=async(req,res)=>{
    const taskDisplay=await Task.find({workersName:req.params['workerid'], isDone: true });
    if(!taskDisplay){
     return  res.send('Failed');
    }
    res.send(taskDisplay)

  }

  exports.completeTask= async(req, res)=>{
   
    let result;
    const  task=await Task.findById({_id:req.params['id']});
    
        let date1 = new Date(task.deadline).getDate;
        let date2 = new Date(Date.now()).getDate;
        console.log(date2)
      
        if (date1 < date2) {
        result = await task.updateOne({$set:{isDone: true , submitDate:new Date(Date.now()), taskStatues:"Late"}})

        } else if (date1 > date2) {
          result = await task.updateOne({$set:{isDone: true , submitDate:new Date(Date.now()), taskStatues:"On Time"}})
        } else {
          result = await task.updateOne({$set:{isDone: true , submitDate:new Date(Date.now()), taskStatues:"On Time"}})
        }
        // result = await task.updateOne({$set:{isDone: true , submitDate:new Date(Date.now()), taskStatues:"On Time"}})
        res.send(task)


  }