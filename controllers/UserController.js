'use strict';
var User = require('../models/user');

/**
 * Find all the users
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.findAll = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

/**
 * Store new user
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.store = function (req, res) {
    var newUser = new User(req.body);
    newUser.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

/**
 * Find the user by id
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.findById = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

/**
 * Update the user by id
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.update = function (req, res) {
    User.findOneAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

/**
 * Delete the user by id
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.id
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({message: 'User successfully deleted'});
    });
};