const express = require('express');
const router = express.Router();

const classRoutes = require('./classRoutes');
const userRoutes = require('./userRoutes');
const paymentRoutes = require('./paymentRoutes');

// Combine and use the routes
router.use('/api/classes', classRoutes);
router.use('/api/users', userRoutes);
router.use('/api/payments', paymentRoutes);

module.exports = router;

