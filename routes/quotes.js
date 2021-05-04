const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const quotesController = require("../controllers/quotes.js");

// Renders a new Quote
router.get("/", ensureAuth, quotesController.getQuotes);

//exporting our router
module.exports = router;