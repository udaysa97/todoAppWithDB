const express=require('express');
const port=8000;
const app=express();
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const db=require('./config/mongoose');
const flash = require('connect-flash');
const customMWare = require('./config/middlewear');
app.use(express.urlencoded());
app.use(cookieParser());
// set up views basics
app.use(express.static('./assets'));
app.set('view engine','ejs');
app.set('views','./views');
// seperate js and css files in layout.ejs
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(expressLayouts);

// sessions important to use falsh messages 
app.use(session({
    name:'auth_struc',
    secret:'randomEncrypt',  
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*10)
    }
}));

app.use(flash());
app.use(customMWare.setFlash);

app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log('server up at port',port);
    return;
})
