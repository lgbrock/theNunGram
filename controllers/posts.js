const cloudinary = require('../middleware/cloudinary');
const Post = require('../models/Post');

module.exports = {
  getPosts: async (req, res) => {
    try {
      // const posts = await Post.find({ user: req.user.id });
      const posts = await Post.find();
      console.log(`posts: ${posts}`);
      res.render('posts.ejs', { posts });
    } catch (err) {
      console.log(err);
    }
  },
  randomPage: (req, res) => {
    res.render('randomPage.ejs');
  },
  addPost: (req, res) => {
    res.render('addPost.ejs');
  },
  createPost: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result);
      const post = await req.body;

      await Post.create({
        caption: post.caption,
        content: result.secure_url,
        cloudinaryId: result.public_id,
        user: req.user.id,
        author: req.user.displayName,
      });
      console.log(`Post has been added!`);
      res.redirect('/posts');
    } catch (err) {
      console.log(err);
    }
  },
  // getUserPosts: async (req, res) => {},
};
