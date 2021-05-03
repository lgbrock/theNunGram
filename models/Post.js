const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  caption: {
    type: String,
  },
  image: {
    type: String,
  },
  clip: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  author: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  randomPost: {
    type: String,
  }
});

module.exports = mongoose.model('Post', PostSchema);
