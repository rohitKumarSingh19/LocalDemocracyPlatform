const mongoose = require('mongoose');

const LegislationSchema = new mongoose.Schema({
  title: String,
  summary: String,
  date: Date,
});

module.exports = mongoose.model('Legislation', LegislationSchema);