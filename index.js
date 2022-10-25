const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())


const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('news api running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Running on Port ${port}`)
})