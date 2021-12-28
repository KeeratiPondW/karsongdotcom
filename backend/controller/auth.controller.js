const express = require('express')
const router = express.Router()
const {
    login,
    register,
    isLoggedIn
} = require('../router/auth.router')
const auth = require("../middleware/auth")

router.post('/login', login)
router.post('/register', register)
router.get('/isloggedin', auth, isLoggedIn)

module.exports = router