const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  bio: {
    type: String,
  },
  id: {
    type: number
  }
})


module.exports = mongoose.model('User', UserSchema);