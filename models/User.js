const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for User
const UserSchema = new Schema({

    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    last_login: {
        type: Date,
        default: Date.now,
        required: true

    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type:Number,
        required: true
    }

});

mongoose.model('user',UserSchema,'user');