const Quotes = require('../models/Quotes');

module.exports = {
    getQuotes: async (req, res) => {
        try {
            const quotes = await Quotes.find();
            console.log(quotes)
            res.render('quotes.ejs', {quotes});
        } catch (err) {
            console.error(err)
        }
    },
}
