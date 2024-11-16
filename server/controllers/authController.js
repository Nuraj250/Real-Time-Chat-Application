const User = require('../models/userModel');
const { generateToken } = require('../config/auth');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const userExist = await User.findOne({ username });
    if (userExist) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ username, password });
    await newUser.save();

    // Generate token
    const token = generateToken(newUser._id);

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate token
    const token = generateToken(user._id);

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

module.exports = { register, login };
