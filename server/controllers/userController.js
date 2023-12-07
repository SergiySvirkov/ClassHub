const { User } = require('../models');

const getUserProfile = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

// Add other user-related controller functions as needed

module.exports = {
  getUserProfile,
  // Add other exported functions
};

