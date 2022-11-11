const {request, response} = require("express");
const Pool = require('pg').Pool
const pool = new Pool({
    'user': 'postgres',
    'host': 'localhost',
    'database': 'bala',
    'password': 'Admin@13579',
    'port':5432
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) =>{
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const {first_name, last_name } = request.body
    pool.query('INSERT INTO users (first_name, last_name) VALUES ($1,$2) RETURNING *',[first_name,last_name], (error, results) => {
        if(error) {
            throw error
        }
        response.status(201).send(`Added User: ${results.rows[0].id}`)
    })
}

module.exports = {
    getUsers,
    createUser
}