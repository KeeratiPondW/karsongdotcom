const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if (!token) {
        return res.json({ auth: false, message: "A token is required for authentication" }) //status 403
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
    } catch (err) {
        return res.json({ auth: false, message: "Invalid Token" }) //status 401
    }
    return next()
}

module.exports = verifyToken