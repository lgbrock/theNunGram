const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const { ensureAuth } = require("../middleware/auth");
const postsController = require("../controllers/posts.js");

// Renders a random Post's page
router.get("/randomPost", ensureAuth, postsController.randomPost);

//Get get a post By it's ID
router.get("/:id", postsController.getPost);

// Put
router.put("/:id/addLike", postsController.addLike);

// Creates a new Post. Listens to a POST request from the profile.ejs Form
router.post("/addPost", upload.single("file"), postsController.createPost);

// delete post
router.delete("/:id/deletePost", postsController.deletePost);

// router.get('/randomPage', postsController.randomPage);

module.exports = router;
