// Initialize express router
let router = require('express').Router();
// Import login controller
var loginController = require('../controllers/loginController');

router.route('/')
    .post(loginController.login);
// Export API routes
module.exports = router;