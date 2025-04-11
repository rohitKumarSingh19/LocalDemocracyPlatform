const Feedback = require('../models/Feedback');

exports.sendFeedback = async (req, res) => {
  const { repId, message } = req.body;
  const feedback = new Feedback({
    userId: req.user.id,
    repId,
    message,
    response: '', // can be updated later
  });
  await feedback.save();
  res.status(201).json(feedback);
};
