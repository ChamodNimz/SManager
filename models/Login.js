const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CreateSchema
const LoginSchema = new Schema({

    status:{
        type: Number,
        required : true
    },
    username:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    group_id:{
        type: Number,
        required: false
    },
    role_id:{
        type: Number,
        required: false
    }
});

mongoose.model('login',LoginSchema,'login');

