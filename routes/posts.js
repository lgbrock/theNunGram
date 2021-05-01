const express = require('express');
const router = express.Router();

const postsController =  require('../controllers/posts.js')

router.get('/', postsController.getPosts);
router.get('/randomPage', postsController.randomPage);

module.exports = router;