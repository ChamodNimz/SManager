const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for Group
const GroupSchema = Schema({

    group_name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    suffix:{
        type: String,
        required: true
    }

});

mongoose.model('group',GroupSchema,'group');
