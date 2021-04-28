// const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

// // // @desc Get homepage / login area
// // // @req GET /
router.get('/', (req,res) => {
  res.send('Login') // change to render ejs template
})


// // //@desc Get Stories page after login
// // // @req GET /stories
router.get('/stories', (req,res) => {
  res.send('Stories') // change to render ejs template
})

module.exports = router