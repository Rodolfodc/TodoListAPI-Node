'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    Created_date:{
        type: Date,
        default: Date.now
    },
    status:{
        type:[{
            type: String,
            enum: ['Todo', 'Doing', 'Done']
        }],
        default: ['Todo']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);