const mongoose = require('mongoose');

const ImpactSchema = new mongoose.Schema({
  policy: String,
  demographics: Object, // { ageGroup: number, incomeGroup: number, etc. }
});

module.exports = mongoose.model('Impact', ImpactSchema);