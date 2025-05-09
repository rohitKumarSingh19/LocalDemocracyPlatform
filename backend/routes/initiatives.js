const express = require('express');
const Initiative = require('../models/Initiative');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { title, description } = req.body;
  const newInitiative = new Initiative({ title, description, creator: req.user.id });
  await newInitiative.save();
  res.json({ message: 'Initiative created' });
});

router.get('/', async (req, res) => {
  const list = await Initiative.find().populate('creator');
  res.json(list);
});

module.exports = router;