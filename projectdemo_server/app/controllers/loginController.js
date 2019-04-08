// Import user model
User = require('../models//userModel');

// Handle login
exports.login = function (req, res) {
    User.login(req.body, function (err, user) {
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