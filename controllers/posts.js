const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
// custom middleware for handling embedding of twitch clips
const {
  videoOrigin,
  repeatURLParams,
  convertTwitchClip,
} = require("../middleware/customFunctions");
const router = require("../routes/quotes");

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
      // Awaiting randomly skipped post array and taking it's first (only) index.
      const post = (await Post.find().skip(randomNum).limit(1))[0];
      res.redirect(`/post/${post._id}`);
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
<<<<<<< HEAD
        clip: convertTwitchClip(
          post.clip,
          "thenungram.herokuapp.com",
          "www.thenungram.herokuapp.com"
        ),
=======
        clip: convertTwitchClip(post.clip, 'herokuapp.com', 'thenungram.herokuapp.com'),
>>>>>>> upstream/main
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
