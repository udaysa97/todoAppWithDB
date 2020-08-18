const mongoose=require('mongoose');
const todoListSchema=mongoose.Schema({
    taskName:{
        type:String,
        required:true
    },
    taskType:{
        type:String,
        required:true
    },
    deadline:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        default: false

    }
},
{
    timeStamps:true
});
const todoList=mongoose.model('todoList',todoListSchema);
module.exports=todoList;