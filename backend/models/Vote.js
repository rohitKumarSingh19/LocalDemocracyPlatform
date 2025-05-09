const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  pollId: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // link to User model if available
    ref: 'User',
    required: true
  },
  option: {
    type: String,
    required: true
  },
  votedAt: {
    type: Date,
    default: Date.now
  }
});

// Optional: Prevent duplicate voting by same user on same poll
voteSchema.index({ pollId: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model('Vote', voteSchema);
