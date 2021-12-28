const pool = require('../db')

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            res.status(500).json(error)
            // throw error
        }
        res.status(200).json(results.rows)
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            return res.status(500).json(error)
            // throw error
        }
        res.status(200).json(results.rows[0])
    })
}

const createUser = (req, res) => {
    const { name, email } = req.body
    // try{
    //     const results = pool.query('INSERT INTO users(name, email) VALUES ($1, $2) RETURNING user_id', [name, email])
    //     res.status(201).send(`User added with ID: ${results.rows[0].user_id}`)
    // }catch(error){
    //     res.status(500).json(error)
    //     throw error
    // }
    pool.query('INSERT INTO users(name, email) VALUES ($1, $2) RETURNING id', [name, email], (error, results) => {
        if (error) {
            res.status(500).json(error)
            throw error
        }
        res.status(201).send(`User added with ID: ${results.rows[0].user_id}`)
    })

}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, email } = req.body

    pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id], (error, results) => {
        if (error) {
            res.status(500).json(error)
            // throw error
        }
        res.status(200).send(`User modified with ID: ${id}`)
    })
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            res.status(500).json(error)
            // throw error
        }
        res.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}