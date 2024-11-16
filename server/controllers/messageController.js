const Message = require('../models/messageModel');

const sendMessage = async (req, res) => {
  try {
    const { userId, content, chatRoomId } = req.body;

    // Create new message
    const newMessage = new Message({ userId, content, chatRoomId });
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const { chatRoomId } = req.params;

    // Retrieve messages for the given chat room
    const messages = await Message.find({ chatRoomId }).sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

module.exports = { sendMessage, getMessages };
