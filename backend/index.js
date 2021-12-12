require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const auth = require("./middleware/auth")

const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, }))

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/welcome', auth, (req,res)=>{
    res.send("welcome")
})

// app.get('/users', db.getUsers)
// app.get('/users/:id', db.getUserById)
// app.post('/users', db.createUser)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)
app.use(require('./controller/users.controller'))
app.use(require('./controller/auth.controller'))

app.get('/example', (req, res) => {
    const email = req.query.email
    res.status(200).send(email)
    // res.status(200).send('keerati')
})

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})