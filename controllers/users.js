const User = require('../models/User');

module.exports = {
	getUsers: async (req, res) => {
		try {
			const people = await User.find();
			res.render('users.ejs', { pancake: people }); 
			console.log(people);
		} catch (err) {
			console.log(err);
		}
	},
	// getUser: async (req, res) => {
	//   const user = await User.findById(req.params.id);
	//   console.log(user);
	// },
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
	profile: (req, res) => {
		res.render('profile.ejs');
	},
};
