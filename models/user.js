'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');


var UserSchema = new Schema({
    first_name: {
        type: String,
        Required: 'Please enter the first name'
    },
    last_name: {
        type: String,
        Required: 'Please enter the last name'
    },
    email: {
        type: String,
        Required: 'Please enter the email'
    },
    password: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'inactive']
        }],
        default: ['active']
    }
});

module.exports = mongoose.model('User', UserSchema);