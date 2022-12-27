require('dotenv').config();
import express from 'express';
import { json, urlencoded } from 'body-parser';
import { request, response } from "express";
const app = express();
import { getUsers, getUsersSale, createUser, createUserSalesforce, updateUser, deleteUser } from './postgres';
const port = process.env.PORT || 5557;


app.use(json())
app.use(
    urlencoded({
        extended:true,
    })
)

app.get('/', (request, response) => {
        response.json({info: 'Our class is not live.'})
})

app.get('/users', getUsers)
app.get('/users/sales', getUsersSale)
app.post('/users', createUser)
app.post('/users/sales', createUserSalesforce)
app.put('/users/:id', updateUser)
app.delete('/users/:id', deleteUser)

app.listen(port,() => {
    console.log(`App is running on port ${port}.`)
})

