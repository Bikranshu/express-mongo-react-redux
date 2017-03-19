'use strict';
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var config = require('../config/config');

exports.authenticate = function (req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {

        if (err) throw err;

        if (!user) {
            res.json({success: false, message: 'Authentication failed. User not found!'});
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({success: false, message: 'Authentication failed. Invalid password.'});
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, config.secretKey);

                res.json({
                    success: true,
                    message: 'User token!',
                    token: token
                });
            }

        }

    });
};