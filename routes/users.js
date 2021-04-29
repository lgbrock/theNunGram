const express = require('express');
const router = express.Router();

// requiring in our userController
const usersController = require('../controllers/users.js');

// Hands GET requests to our /users route over to usersControllers.getUsers
router.get('/', usersController.getUsers);

//Handles GET AND POST requests to our /users/addUser
router.get('/addUser', usersController.userForm);
router.post('/addUser', usersController.addUser);

module.exports = router;
