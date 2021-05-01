//Requiring our dependencies
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/database');
const session = require('express-session')
const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');

// initialize express
const app = express();

//Load config setting the .env path to /config/.env
dotenv.config({ path: "./config/.env" });

// Load passport config
require('./config/passport')(passport)

// connect to database
connectDb();

//Calling our packages
app.set('view engine', 'ejs'); // sets the view engine to render our ejs
app.use(express.static('public')); // tells express to serve up these 'static' files
app.use(cors()); //allows for cross origin resource sharing(Not used for this project but very important so make it a habit)
app.use(morgan('dev')); //logging middleware. Check console for logs

//body-parsing middleware (required to parse incoming JSON)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//initialize express sessions - used to persist connection to db
// TODO: add mongo-connect V3
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}))

// initialize passport sessions - persists auth until user logs out
app.use(passport.initialize());
app.use(passport.session());

// // Routes
app.use('/', homeRoutes);
app.use('/users', usersRoutes);
app.use('/auth', require('./routes/auth')) // TODO: define variable up top

//Initializing our PORT
let PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}.... you better go catch it`);
});