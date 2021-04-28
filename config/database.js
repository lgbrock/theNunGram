const mongoose = require('mongoose');

const connectDb = async () => {
  try {
  const conn = await mongoose.connect('mongodb+srv://yoda:TheForce231@cluster0.uyfth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true

  })
  console.log(`Mongodb connected: ${conn.connection.host}`)

  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDb