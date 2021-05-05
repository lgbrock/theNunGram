const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
  author: {
    type: String,
  },
  quote: {
    type: String,
  },
});

module.exports = mongoose.model("Quote", QuoteSchema);
