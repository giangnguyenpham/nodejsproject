// Initialize express router
let router = require('express').Router();
// Import contact controller
var userController = require('../controllers/userController');

router.route('/')
    .get(userController.getAll)
    .post(userController.add);

router.route("/:id")
    .get(userController.get)
    .patch(userController.update)
    .delete(userController.delete)

// Export API routes
module.exports = router;