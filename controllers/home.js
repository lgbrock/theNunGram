const User = require("../models/User");
const Post = require("../models/Post");
const Quote = require("../models/Quote");

module.exports = {
  getHome: (req, res) => {
    res.render("index.ejs");
  },
  getInfo: (req, res) => {
    res.render("info.ejs");
  },
  getProfile: async (req, res) => {
    try {
      //finds all the posts where the user field in the DB matches our incoming req.user.id
      //req.user is coming in from google and its successful login
      const posts = await Post.find({ user: req.user.id });
      //render our profile page and pass in our templating reference
      res.render("profile2.ejs", { user: req.user, posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      //finds all posts
      const posts = await Post.find();
      const user = await req.user;

      const quoteCount = await Quote.find().then((data) => data.length);
      const randomNum = Math.floor(Math.random() * quoteCount);
      const quote = (await Quote.find().skip(randomNum).limit(1))[0];

      //renders feed page, and pass in our templating reference
      res.render("feed.ejs", { posts, user: user, quote: quote });
      console.log("feed got! Hope youre hungry");
    } catch (err) {
      console.log(err);
    }
  },
};
