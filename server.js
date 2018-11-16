const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = 3000;

var index = require('./routes/index');
var api = require('./routes/api');
var users = require('./routes/api/users');
var groups = require('./routes/api/group');
var app = express();


// Connect to mongo DB
mongoose.connect(' mongodb://localhost/smanager',{ useNewUrlParser: true })
    .then(function(){
        console.log("mongoDB connected");
    }).catch(function(err){
        console.log(err);
    })


// View engine 
app.set('views',path.join(__dirname,'client/dist'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);


// Set statis folder for angular  files
app.use(express.static(path.join(__dirname,'client/dist')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',index); // serve index page
app.use('/web',api); // api calls
app.use('/web/api',users); // api users
app.use('/web/api',groups); // api users

app.listen(port,function(){
    console.log('server started ....');
});