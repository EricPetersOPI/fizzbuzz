const express = require('express')
const app = express()
const buzzfizz = require('./index')

app.use(express.text())
app.get('/', function (req, res, next) {
    res.send('Hello World')
})
app.post('/fizzbuzz', (req, res, next) => {
    const data = req.body.split(',')
    buzzfizz(data)
})
app.listen(3000)