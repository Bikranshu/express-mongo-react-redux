'use strict';
var jwt = require('jsonwebtoken');
var HttpStatus = require('http-status-codes');
var User = require('../models/user');
var logger = require('../utils/logger');
/**
 * Authenticate user by email and password
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.authenticate = function (req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {

        if (err) throw err;

        if (user) {
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch) {
                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign(user, process.env.TOKEN_SECRET_KEY);
                    res.json({
                        success: true,
                        user: user,
                        token: token
                    });
                } else {
                    logger.log('error', 'Authentication failed. Invalid password.');
                    res.status(HttpStatus.UNAUTHORIZED).json({error: true, message: 'Authentication failed. Invalid password.'});
                }
            });

        } else {
            logger.log('error', 'Invalid username or password.');
            res.status(HttpStatus.UNAUTHORIZED).json({error: true, message: 'Invalid username or password.'});
        }

    });
};