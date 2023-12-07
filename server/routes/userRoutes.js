const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for users
router.get('/:userId', userController.getUserProfile);
// Add other user-related routes as needed

module.exports = router;

