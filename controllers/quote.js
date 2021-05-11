const Quote = require('../models/Quote');

module.exports = {
  getQuotes: async (req, res) => {
    try {
      const quoteCount = await Quote.find().then((data) => data.length);
      const randomNum = Math.floor(Math.random() * quoteCount);
      const quote = (await Quote.find().skip(randomNum).limit(1))[0];

      res.json(quote);
    } catch (err) {
      console.error(err);
    }
  },
  addQuote: async (req, res) => {
    res.render('addQuote.ejs');
  },
  createQuote: async (req, res) => {
    try {
      const user = await req.user.displayName;

      const { quote } = await req.body;
      Quote.create({
        quote: quote,
        contributedBy: user,
        createdAt: new Date(),
      });
      res.redirect(`/feed`);
    } catch (err) {
      console.log(err);
    }
  },
};
