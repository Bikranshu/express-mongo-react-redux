'use strict';
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var config = require('../config/config');

exports.authenticate = function (req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {

        if (err) throw err;

        if (user) {
            if (user.password == req.body.password) {
                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, config.secretKey);
                res.json({
                    success: true,
                    user: user,
                    token: token
                });
            } else {
                res.status(401).json({error: true, message: 'Authentication failed. Invalid password.'});
            }
        } else {
            res.status(401).json({error: true, message: 'Invalid username or password.'});
        }

    });
};