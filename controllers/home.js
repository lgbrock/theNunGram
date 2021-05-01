module.exports = {
  //The getHome method receives a promise, handles said promise and responds with some JSON
  getHome: (req, res) => {   
    res.render('index.ejs');
  },
  getProfile: (req,res) => {
    res.render('profile.ejs')
  }
  // login: (req, res) => {
  //   res.render('login.ejs');
  // },
  // signUp: (req, res) => {
  //   res.render('signUp.ejs');
  // },
};
