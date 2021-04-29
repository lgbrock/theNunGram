module.exports = {
  //The getHome method receives a promise, handles said promise and responds with some JSON
  getHome: (req, res) => {
    // res.json('This is the home page');
    res.render('index.ejs');
  },
};
