const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/todoapp');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error while connecting to Database'));
db.once('open',()=>{
    console.log('Connection toDB success');
});