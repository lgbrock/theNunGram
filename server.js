//Requiring our dependencies
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const connectDb = require('./config/database');
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const postsRoute = require('./routes/posts');
const quotesRoutes = require('./routes/quotes');
const methodOverride = require('method-override')


// initialize express
const app = express();

//Load config setting the .env path to /config/.env
dotenv.config({ path: './config/.env' });

// Load passport config
require('./config/passport')(passport);

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
app.use(methodOverride("_method"))

//initialize express sessions - used to persist connection to db
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// initialize passport sessions - persists auth until user logs out
app.use(passport.initialize());
app.use(passport.session());

// // Routes
app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/post', postsRoute);
app.use('/quotes', quotesRoutes);

//Initializing our PORT
let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.... you better go catch it`);
});
