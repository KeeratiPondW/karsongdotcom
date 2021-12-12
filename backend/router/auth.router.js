const pool = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }

        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email.toLowerCase()])
        if (user.rowCount != 0 && await bcrypt.compare(password, user.rows[0].password)) {
            const token = jwt.sign(
                { id: user.rows[0].id, email },
                process.env.JWT_SECRET,
                { expiresIn: "2h" }
            )
            user.rows[0].token = token
            res.status(200).json(user.rows[0])
        }
        res.status(400).send("Invalid Credentials")
    } catch (err) {
        console.log(err)
    }

}

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!(email && password)) {
            res.status(400).send("All input is required")
        }

        const oldUser = await pool.query('SELECT * FROM users WHERE email = $1', [email.toLowerCase()])
        if (oldUser.rowCount != 0) {
            return res.status(409).send("User Already Exist. Please Login")
        }

        encryptedPassword = await bcrypt.hash(password, 10)

        const user = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email.toLowerCase(), encryptedPassword])

        const token = jwt.sign(
            { id: user.rows[0].id, email },
            process.env.JWT_SECRET,
            {
                expiresIn: "2h",
            }
        )

        user.rows[0].token = token

        res.status(201).json(user.rows[0])
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    login,
    register
}