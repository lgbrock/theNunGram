const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  caption: {
    type: String,
  },
  image: {
    type: String,
    default: null,
  },
  clip: {
    type: String,
  },
  cloudinaryId: {
    type: String,
    default: null,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  author: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Post", PostSchema);
