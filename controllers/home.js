const User = require('../models/User');

module.exports = {
  //The getHome method receives a promise, handles said promise and responds with some JSON
  getHome: (req, res) => {
    res.render('index.ejs');
  },
  getProfile: async (req, res) => {
    try {
      //console.log(req.body);
      const profile = await User.find({ googleId: req.body.id });
      console.log(profile);
      res.render('profileTest.ejs', { user: profile });
    } catch (err) {
      console.log(err);
    }
  },
  // login: (req, res) => {
  //   res.render('login.ejs');
  // },
  // signUp: (req, res) => {
  //   res.render('signUp.ejs');
  // },
};
