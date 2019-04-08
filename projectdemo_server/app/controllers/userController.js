// Import user model
User = require('../models//userModel');

// Handle event
exports.getAll = function (req, res) {
    User.get(null, function (err, user) {
        if (err) {
            res.status(400).json({
            message: err
            });
            return;
        }
        res.json({
            message: 'success',
            data: user
        });
    });
};

exports.get = function (req, res) {
    User.get(req.params.id, function (err, user) {
        if (err) {
            res.status(400).json({
            message: err
            });
            return;
        }
        res.json({
            message: 'success',
            data: user
        });
    });
};

exports.add = function (req, res) {
	var errors=[]
    if (!req.body.password){
        errors.push("No password specified");
    }
    if (!req.body.tel){
        errors.push("No tel specified");
    }
    if (errors.length){
        res.status(400).json({ message: errors.join(",")});
        return;
    }
    User.add(req.body, function (err, user) {
        if (err) {
            res.status(400).json({
            message: err
            });
        	return;
        }
        res.json({
            message: 'success',
            data: user
        });
    });
};


exports.update = function (req, res) {
    User.update(req.params.id, req.body, function (err, user) {
        if (err) {
            res.status(400).json({
            message: err
            });
            return;
        }
        res.json({
            message: 'success',
            data: user
        });
    });
};

exports.delete = function (req, res) {
    User.delete(req.params.id, function (err, user) {
        if (err) {
            res.status(400).json({
            message: err
            });
            return;
        }
        res.json({
            message: 'success'
        });
    });
};