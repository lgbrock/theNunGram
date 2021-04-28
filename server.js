const express = require('express');
const mongoose = require('mongoose')
const connectDb = require('./config/database')


//Load config
// dotenv.config({path: './config/config.env'})

// connect to database
connectDb()
// initialize express
const app = express();
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))


// // require('dotenv').config({path: './config/.env'})

// // Routes
app.use('/', require('./routes/index')) 

// app.get('/', (req,res) => {
//     res.send('Hello World!')
// })

app.listen(process.env['PORT'] || 5000, () => {
    console.log('Server is running...')
})

