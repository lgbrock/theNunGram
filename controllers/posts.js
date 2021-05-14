const cloudinary = require('../middleware/cloudinary');
const Post = require('../models/Post');

// custom middleware for handling embedding of twitch clips
const {
  videoOrigin,
  repeatURLParams,
  convertTwitchClip,
  checkIfTwitchClip,
} = require('../middleware/customFunctions');
const router = require('../routes/quotes');

module.exports = {
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render('post.ejs', { post, user: req.user });
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
    res.render('addPost.ejs');
  },
  createPost: async (req, res) => {
    try {
      // if no there is no file uploaded set image and cloudinary values as null, but if there is upload to cloudinary and return that result back
      const result = !req.file
        ? { image: null, cloudinaryId: null }
        : await cloudinary.uploader.upload(
            req.file.path,
            {
              transformation: [
                {
                  crop: 'scale',
                  width: '850',
                  quality: 'auto',
                  format: 'auto',
                },
              ],
            },
            (err, data) => console.log(data, err)
          );

      const post = await req.body;
      // extracted into variable to handle ternary expression. if post.chip is not true set it equal to "" else set it to value sent in post.clip after running through twitch middleware
      const clip = !post.clip
        ? ''
        : checkIfTwitchClip(post.clip) // boolean check. if not a twitch clip, prevent upload.
        ? convertTwitchClip(
            post.clip,
            'herokuapp.com',
            'thenungram.herokuapp.com'
          )
        : null;
      // if an unsupported file or clip is uploaded, send an error message.
      if (clip === null) {
        const posts = await Post.find({ user: req.user.id });
        res.render('profile2', {
          msg: 'Image or video clip type not supported.',
          user: req.user,
          post: posts,
        });
      } else {
        await Post.create({
          caption: post.caption,
          image: result.secure_url,
          clip,
          cloudinaryId: result.public_id,
          user: req.user.id,
          author: req.user.displayName,
        });
        console.log('Post has been added');
        res.redirect('/profile');
      }
    } catch (err) {
      console.log(err);
    }
  },
  addLike: async (req, res) => {
    // console.log(req.params);
    const postId = req.params.id;
    await Post.findOneAndUpdate(
      { _id: postId },
      {
        $inc: { likes: 1 },
      }
    );
    const storedPost = await Post.findById(postId);
    console.log(`post ${storedPost._id}, now has ${storedPost.likes} likes.`);
    // res.redirect(`post/${postId}}`);
    res.redirect('back');
  },
  deletePost: async (req, res) => {
    console.log(req.params.id);
    try {
      let post = await Post.findById({ _id: req.params.id });

      if (post.cloudinaryId != undefined) {
        await cloudinary.uploader.destroy(post.cloudinaryId);
      }

      await Post.remove({ _id: req.params.id });

      res.redirect('/feed');
    } catch (err) {
      console.log(err);
      res.redirect('/feed');
    }
  },
};
