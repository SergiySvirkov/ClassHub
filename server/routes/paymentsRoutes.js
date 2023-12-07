const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Define routes for payments
router.post('/process', paymentController.processPayment);
// Add other payment-related routes as needed

module.exports = router;

