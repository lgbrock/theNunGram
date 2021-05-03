const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const { ensureAuth } = require('../middleware/auth');
const postsController = require('../controllers/posts.js');

//Get get a post By it's ID
router.get('/:id', ensureAuth, postsController.getPost);

// Creates a new Post. Listens to a POST request from the profile.ejs Form
router.post('/addPost', upload.single('file'), postsController.createPost);

// router.get('/randomPage', postsController.randomPage);

module.exports = router;
