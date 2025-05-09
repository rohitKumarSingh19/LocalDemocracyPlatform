let io = null;

const setIO = (ioInstance) => {
  io = ioInstance;
};

const submitVote = async (req, res) => {
  const { pollId, option } = req.body;
  const vote = { pollId, option, userId: req.user.id };

  // Save vote to DB (pseudo)
  // await Vote.create(vote);

  if (io) {
    io.emit('vote-submitted', vote);
  }

  res.status(201).json(vote);
};

module.exports = { submitVote, setIO };
