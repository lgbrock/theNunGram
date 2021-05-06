const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  quote: {
    type: String,
  },
  contributedBy: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model('Quote', QuoteSchema);
