const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: {
      type: String,
      required: true
  },
  displayName: {
      type: String,
      required: true
  },
  firstName: {
      type: String,
      required: true
  },
  lastName: {
      type: String,
      required: true
  },
  image: {
      type: String,
  },
  createdAt: {
      type: Date,
      default: Date.now()
  },
  bio: {
    type: String,
    default: 'Tell the NunGram a little bit about yourself'
  }
})

module.exports = mongoose.model('User', UserSchema); //name object and export it out
