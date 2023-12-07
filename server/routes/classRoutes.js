const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// Define routes for classes
router.get('/', classController.getAllClasses);
// Add other class-related routes as needed

module.exports = router;
