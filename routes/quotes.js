const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const quoteController = require("../controllers/quote.js");

// Renders a new Quote
router.get("/", ensureAuth, quoteController.getQuotes);
router.get("/addQuote", quoteController.addQuote);
router.post("/addQuote", quoteController.createQuote);
//exporting our router
module.exports = router;
