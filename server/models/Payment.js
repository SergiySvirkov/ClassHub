const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Payment = sequelize.define('Payment', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentIntentId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // Add other payment-related fields as needed
});

module.exports = Payment;

