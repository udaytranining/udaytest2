const express = require('express')
const bodyParser = require('body-parser')
const {request, response} = require("express");
const app = express()
const db = require('./postgres')
const port =  process.env.port

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
)

app.get('/', (request, response) => {
        response.json({info: 'Our class is live.'})
})

app.get('/users', db.getUsers)
app.post('/users', db.createUser)

app.listen(port,() => {
    console.log(`App is running on port ${port}.`)
})

