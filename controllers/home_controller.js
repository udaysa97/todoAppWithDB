const taksSchema = require('../models/todo');

// Main page to display all tasks
module.exports.home = (req,res)=>{

    taksSchema.find({},(err,data)=>{
        if(err){
            console.log(err);
        }
        res.render('home',{
            tasks:data,
         });
    });
}

// To create a new task
module.exports.createTask = (req,res)=>{
    if(!req.body.deadline){
        req.flash('error','Please Provide deadline for task');
        return res.redirect('back');
    }
   
    taksSchema.create(req.body,(err,ob)=>{
        if(err){
            console.log('Error while creating new task:'+err);
        }
        req.flash('success','Task added');
        return res.redirect('back');
    });
   
};

// Remove a existing task
module.exports.removeTask = (req,res)=>{
    let id=req.query.delid;
    console.log(id);
    taksSchema.findByIdAndDelete(id,(err)=>{
        if(err){
            console.log(err);
        }
        req.flash('success','Task Deleted Successfully');
        return res.redirect('back');
    });
};

// mark task as completed
module.exports.markCompletedTask = (req,res)=>{
    // let id=req.query.id;
    // console.log(id);
    taksSchema.findByIdAndUpdate(req.query.id,{$set:{isDone:'true'}},(err,updt)=>{
        if(err){
            console.log('error in updating task status');
        }
        req.flash('success','Great!!');
        return res.redirect('back');
    });
};

// mark a completed task as incomplete
module.exports.markNotCompletedTask = (req,res)=>{
    // let id=req.query.id;
    // console.log(id);
    taksSchema.findByIdAndUpdate(req.query.id,{$set:{isDone:'false'}},(err,updt)=>{
        if(err){
            console.log('error in updating task status');
        }
        req.flash('error','Task set as incomplete');
        return res.redirect('back');
    });
};