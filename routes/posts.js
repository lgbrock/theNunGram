const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const { ensureAuth } = require('../middleware/auth');
const postsController = require('../controllers/posts.js');

router.get('/', ensureAuth, postsController.getPosts);
router.get('/randomPage', postsController.randomPage);
router.get('/addPost', postsController.addPost);
router.post('/addPost', upload.single('file'), postsController.createPost);

module.exports = router;
