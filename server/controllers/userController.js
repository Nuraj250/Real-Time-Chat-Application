const User = require('../models/userModel');

const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

module.exports = { getUserProfile };
