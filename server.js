const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
const PORT = 5000

require('dotenv').config({path: './config/.env'})

app.get('/', (req,res) => {
    res.send('Hello World!')
})



app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running...')
})

