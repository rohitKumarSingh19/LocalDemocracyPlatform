const express = require('express');
const Impact = require('../models/Impact');
const router = express.Router();

router.get('/', async (req, res) => {
  const { policy } = req.query;
  const impact = await Impact.findOne({ policy });
  res.json(impact);
});

module.exports = router;