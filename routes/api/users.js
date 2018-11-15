const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// Importing models
require('../../models/Login');
require('../../models/User');

// Declarations
const Login = mongoose.model('login');
const User = mongoose.model('user');


// C R all users
router.route('/users')

    // Get all users
    .get(function(req,res){
        
        User.find(function(err,data){
            if(!err){
                res.send(data);
            }
            else{
                console.log(err);
            }

        });
    })

    // Create user
    .post(function(req,res){

        var user = new User({

            first_name: 'Arya',
            last_name: 'Stark',
            last_login: Date.now(),
            email: 'AryaStark@gmail.com',
            mobile: '5567447657'

        });

        user.save(function(err,data){
            if(!err){
                res.send(data);
            }
            else{
                console.log(err);
            }
        });
    })

// R U D by :id for users
router.route('/user/:id')
    
    // View one user 
    .get(function(req,res){
        
        User.find({_id:req.params.id},function(err,data){
            if(!err){
                res.send(data);
            }
            else{
                console.log(err);
            }

        });

    })

    // Update user
    .put(function(req,res){

        User.findById(req.params.id,function(err,user){
            
            if(!err){
                
                user.first_name = 'updated';
                user.last_name ='last name updated';
                user.last_login = Date.now();
                user.email ='Chamod@updated.com';
                user.mobile ='222222222';
    
                user.save(function(err,updatedUser){
                    res.send(updatedUser);
                });
                
            }
        });

    })
    
    // Delete user 
    .delete(function(req,res){
        res.send({messge:'delete one user'+req.params.id})
    })
   


module.exports  = router;