const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// Importing models
require('../../models/Login');
require('../../models/User');


// importing  helpers
const { checkMongoId, isEmpty } = require('../../helpers/functions');

// Declarations
const Login = mongoose.model('login');
const User = mongoose.model('user');


// C R all users
router.route('/users')

    // Get all users
    .get(function (req, res) {

        User.find(function (err, data) {
            if (!err) {
                res.send(data);
            }
            else {
                throw err;
            }

        });
    })

    // Create user
    .post(function (req, res) {
    
        var user = new User({

            first_name: req.body.first_name,
            last_name: req.body.last_name,
            last_login: Date.now(),
            email: req.body.email,
            mobile: req.body.mobile

        });

        user.save(function (err, data) {
            if (!err) {
                res.send(data);
            }
            else {
                throw err;
            }
        });
    })

// R U D by :id for users
router.route('/user/:id')

    // View one user 
    .get(function (req, res) {

        // Check the id  before executing the code to prevent the mongoose from 
        //  type casting error
        if (checkMongoId(req.params.id)) {

            User.find({ _id: req.params.id }, function (err, data) {

                if (!err) {
                    res.send(data);
                }
                else {
                    throw err;
                }

            });
        }
        else {
            res.send({ message: '404 not found' });
        }

    })

    // Update user
    .put(function (req, res) {
        
        if (checkMongoId(req.params.id)) {

            User.findById(req.params.id, function (err, user) { 
            
                if (!err) {
                    if(user!=null){

                        user.first_name = req.body.first_name;
                        user.last_name = req.body.last_name;
                        user.last_login = Date.now();
                        user.email = req.body.email;
                        user.mobile = req.body.mobile;
        
                        user.save(function (err, updatedUser) {
                            res.send(updatedUser);
                        });
        
                    }
                    else{
                        res.send('404 error or same page ');
                    }
                }
                else {
                    res.send('404 error or same page ');
                    return handleError(err);
                }
            });
            
        }
        else{
            res.send('404 error or same page ');
        }

    })

    // Delete user 
    .delete(function (req, res) {
        if (checkMongoId(req.params.id)) {

            User.deleteOne({ _id: req.params.id }, function (err) {
                if (!err) {
                    res.send('user deleted ');
                }
                else {
                    throw err;
                }

            });
        }
        else {
            res.send({ message: 'id is not a valid mongoID' });
        }
    })

// Login & Logout routes
router.route('/users/login')
    .post(function (req, res) {
        res.send({ message: 'login works' });
    })

router.route('/users/logout')
    .post(function (req, res) {
        res.send({ message: 'logout works' });
    })

module.exports = router;