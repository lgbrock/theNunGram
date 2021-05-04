const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
// custom middleware for handling embedding of twitch clips
const { videoOrigin, repeatURLParams, convertTwitchClip } = require('../middleware/customFunctions')

module.exports = {
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post });
    } catch (err) {
      console.log(err);
    }
  },
  randomPost: async (req, res) => {
    try {
      const postCount = await Post.find().then((data) => data.length);
      const randomNum = Math.floor(Math.random() * postCount);
      const post = await Post.find().skip(randomNum).limit(1);
      console.log(post[0]);
      res.render("randomPost.ejs", { post: post[0] });
    } catch (err) {
      console.log(err);
    }
  },
  addPost: (req, res) => {
    res.render("addPost.ejs");
  },
  createPost: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);

      const post = await req.body;

      await Post.create({
        caption: post.caption,
        image: result.secure_url,
        clip: convertTwitchClip(post.clip, 'thenungram.herokuapp.com', 'www.thenungram.herokuapp.com'),
        cloudinaryId: result.public_id,
        user: req.user.id,
        author: req.user.displayName,
      });
      console.log("Post has been added");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};
