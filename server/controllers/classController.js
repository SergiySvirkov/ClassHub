const { Class } = require('../models');

const getAllClasses = async (req, res, next) => {
  try {
    const classes = await Class.findAll();
    res.json(classes);
  } catch (error) {
    next(error);
  }
};

// Add other class-related controller functions as needed

module.exports = {
  getAllClasses,
  // Add other exported functions
};
