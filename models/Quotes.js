const mongoose = require('mongoose')

const QuotesSchema = new mongoose.Schema({
    author: {
        type: String,
      },
    quotes: {
        type: String,
    },
})

module.exports = mongoose.model('Quotes', QuotesSchema)