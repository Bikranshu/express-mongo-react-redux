'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.findAll = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.store = function (req, res) {
    var NewUser = new User(req.body);
    NewUser.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.findById = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.update = function (req, res) {
    User.findOneAndUpdate(req.params.userId, req.body, {new: true}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.delete = function (req, res) {
    User.remove({
        _id: req.params.userId
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({message: 'User successfully deleted'});
    });
};