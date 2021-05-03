const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

module.exports = {
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post });
    } catch (err) {
      console.log(err);
    }
  },
  randomPage: (req, res) => {
    res.render("randomPage.ejs");
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
        clip: post.clip,
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
