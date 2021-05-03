//calling our dependencies
const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

//importing in the home controller
const homeController = require('../controllers/home');

//Get Request to the '/' route will be handed off to the homeController's getHome method
router.get('/', ensureGuest, homeController.getHome);
//Gets profile Page. Successful Auth Login will redirect to this GET request
router.get('/profile', ensureAuth, homeController.getProfile);
//Gets the Feed
router.get('/feed', ensureAuth, homeController.getFeed);

//exporting our router
module.exports = router;
