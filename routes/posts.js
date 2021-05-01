const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const postsController = require("../controllers/posts.js");

router.get("/", ensureAuth, postsController.getPosts);
router.get("/randomPage", postsController.randomPage);
router.get("/addPost", postsController.addPost);
router.post("/addPost", postsController.createPost);

module.exports = router;
