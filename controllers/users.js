const User = require('../models/User');

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.render('users.ejs', { user: users });
      console.log('Fetched users from DB!');
    } catch (err) {
      console.log(err);
    }
  },
  // getUser: async (req, res) => {
  //   const user = await User.findById(req.params.id);
  //   console.log(user);
  // },
  profile: (req, res) => {
    res.render('profile.ejs');
  },
};
