const User = require('../models/User');

module.exports = {
  getUsers: async (req, res) => {
    res.render('users.ejs', { user: req.body.user });
  },
  userForm: async (req, res) => {
    res.render('addUser.ejs');
  },
  addUser: async (req, res) => {
    try {
      const user = await req.body;
      console.log(req.body);

      await User.create({
        name: user.name,
        email: user.email,
        bio: user.bio,
      });
      console.log('User has been added!');
      res.redirect('/');
    } catch (err) {
      console.log(err);
    }
  },
};
