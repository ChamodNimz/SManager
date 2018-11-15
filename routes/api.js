var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/*
// Connect to mongo DB
mongoose.connect(' mongodb://localhost/smanager',{ useNewUrlParser: true })
    .then(function(){
        console.log("mongoDB connected");
    }).catch(function(err){
        console.log(err);
    })



// Importing Login model
require('../models/Login');

// Declarations
const Login = mongoose.model('login');


// Create users
router.post('/api/users',function(req,res,next){

  // Giving schema values
  var login =  new Login({
                    
    status:"1",
    username: "Jhon",
    password: "Snow",
    group_id: "24",
    role_id: "5"

});
    // Save to DB
    // login.save(function(err,data){
    //     console.log(data);
    //     res.send(data);
    // });
    res.send(req.body);

});

// Routes --------------------------------------------------------------

// All user get requests
router.route('/api/users')

    .get(function(req,res){
        res.send("get users")
    })
*/

module.exports  = router;