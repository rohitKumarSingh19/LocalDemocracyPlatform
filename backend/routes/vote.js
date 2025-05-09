const express = require('express');
const Vote = require('../models/Vote');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { pollId, option } = req.body;
  const vote = new Vote({ pollId, option, userId: req.user.id });
  await vote.save();
  res.json({ message: 'Vote recorded' });
});

module.exports = router;