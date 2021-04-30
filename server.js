//Requiring our dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/database');
const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');


// initialize express
const app = express();

//Load config
dotenv.config();

// connect to database
connectDb();

//Calling our packages
app.set('view engine', 'ejs'); // sets the view engine to render our ejs
app.use(express.static('public')); // tells express to serve up these 'static' files
app.use(cors()); //allows for cross origin resource sharing(Not used for this project but very important so make it a habit)
app.use(morgan('tiny')); //logging middleware. Check console for logs

//body-parsing middleware (required to parse incoming JSON)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // require('dotenv').config({path: './config/.env'})

// // Routes
app.use('/', homeRoutes);
app.use('/users', usersRoutes);


//Initializing our PORT
let PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}.... you better go catch it`);
});
