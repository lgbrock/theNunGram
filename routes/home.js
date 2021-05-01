//calling our dependencies
const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

//importing in the home controller
const homeController = require('../controllers/home');

//Get Request to the '/' route will be handed off to the homeController's getHome method
router.get('/', homeController.getHome);
router.get('/profile', ensureAuth, homeController.getProfile);

//These Routes arent needed, they were to test our server.
// router.get('/login', homeController.login);
// router.get('/signup', homeController.signUp);

//exporting our router
module.exports = router;
