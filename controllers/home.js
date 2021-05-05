const User = require("../models/User");
const Post = require("../models/Post");

module.exports = {
  getHome: (req, res) => {
    res.render("index.ejs");
  },
  getProfile: async (req, res) => {
    try {
      //finds all the posts where the user field in the DB matches our incoming req.user.id
      //req.user is coming in from google and its successful login
      const posts = await Post.find({ user: req.user.id });
      //render our profile page and pass in our templating reference
      res.render("profile2.ejs", { user: req.user, post: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      //finds all posts
      const posts = await Post.find();
      console.log(posts)
      //renders feed page, and pass in our templating reference
      res.render("feed.ejs", { posts });
      console.log("feed got! Hope youre hungry");
    } catch (err) {
      console.log(err);
    }
  },
};
