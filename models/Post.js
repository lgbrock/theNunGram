const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  caption: {
    type: String,
  }
  content: {
    type: String
    required: true
  }
})