const pool = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!(email && password)) {
            return res.status(400).send("All input is required");
        }

        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email.toLowerCase()])
        if (user.rowCount != 0 && await bcrypt.compare(password, user.rows[0].password)) {
            const token = jwt.sign(
                { 
                    id: user.rows[0].id, 
                    email, 
                    username: user.rows[0].username, 
                    role: user.rows[0].role
                },
                process.env.JWT_SECRET,
                { expiresIn: "48h" }
            )
            user.rows[0].token = token
            user.rows[0].password = ""

            return res.status(200).json(user.rows[0])
        }
        res.send("อีเมลหรือรหัสผ่านไม่ถูกต้อง") //status 400
    } catch (err) {
        console.log(err)
    }

}

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!(username && email && password)) {
            return res.status(400).send("All input is required")
        }

        const oldUserName = await pool.query('SELECT * FROM users WHERE username = $1', [username])
        if (oldUserName.rowCount != 0) {
            return res.status(409).send("Username นี้มีผู้ใช้แล้ว")
        }

        const oldEmail = await pool.query('SELECT * FROM users WHERE email = $1', [email.toLowerCase()])
        if (oldEmail.rowCount != 0) {
            return res.status(409).send("Email นี้ถูกใช้งานแล้ว")
        }

        encryptedPassword = await bcrypt.hash(password, 10)

        const user = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email.toLowerCase(), encryptedPassword])

        const token = jwt.sign(
            { 
                id: user.rows[0].id, 
                email, 
                username: user.rows[0].username, 
                role: user.rows[0].role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "48h",
            }
        )

        user.rows[0].token = token
        user.rows[0].password = ""

        res.status(201).json(user.rows[0])
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    login,
    register
}