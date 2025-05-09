const express = require('express');
const Legislation = require('../models/Legislation');
const router = express.Router();

router.get('/summaries', async (req, res) => {
  const list = await Legislation.find();
  res.json(list);
});

module.exports = router;