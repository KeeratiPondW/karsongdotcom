const express = require('express')
const router = express.Router()
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../router/users.router')
const auth = require("../middleware/auth")

router.get('/users', getUsers)
router.get('/users/:id', auth, getUserById)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router