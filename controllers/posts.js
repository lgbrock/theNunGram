module.exports  = {
    getPosts: (req,res) => {
        res.render('posts.ejs')
    },
    randomPage: (req, res) => {
        res.render('randomPage.ejs')
    }
}