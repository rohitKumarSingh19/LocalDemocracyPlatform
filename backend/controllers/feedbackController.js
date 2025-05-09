const Feedback = require('../models/Feedback');

let io = null;

// This function will be called from server.js to inject the io instance
const setIO = (ioInstance) => {
  io = ioInstance;
};

const sendFeedback = async (req, res) => {
  try {
    const { repId, message } = req.body;
    const feedback = new Feedback({
      userId: req.user.id,
      repId,
      message,
      response: '', // can be updated later
    });

    await feedback.save();

    // Emit real-time feedback event
    if (io) {
      io.emit('feedback-submitted', feedback);
    }

    res.status(201).json(feedback);
  } catch (error) {
    console.error('❌ Error sending feedback:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  sendFeedback,
  setIO
};
