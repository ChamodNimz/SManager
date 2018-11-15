const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// Importing models
require('../../models/Group');

// Declarations
const Group = mongoose.model('group');

// C R all Groups
router.route('/groups')

    // Get all groups
    .get(function(req,res){
        res.send('get all groups');
    })

    // Create a group
    .post(function(req,res){

        var group = new Group({

            group_name:'Batch 18.1',
            location:'Colombo',
            suffix:'clb'
        });
        group.save(function(err,data){
            if(!err){
                res.send(data);
            }
            else{
                console.log(err);
            }
        });
    })

// R U D by :id for group
router.route('/group/:id')
    
    // View one group 
    .get(function(req,res){
        
        res.send("get one group");
    })

    // Update group
    .put(function(req,res){
        res.send({messge:'update one group'+req.params.id})
    })
    
    // Delete group 
    .delete(function(req,res){
        res.send({messge:'delete one group'+req.params.id})
    })
   


module.exports  = router;