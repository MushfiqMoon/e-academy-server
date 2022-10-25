const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())


const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Courses api running')
})

// for all Category API
app.get('/categories', (req, res) => {
    res.send(categories)
})

// for single course API 
app.get('/course/:id', (req, res) => {
    const id = req.params.id
    const selestedCourse = courses.find(cours => cours.id === id)
    res.send(selestedCourse)
})

// for category wise course API 
app.get('/category/:id', (req, res) => {
    const id = req.params.id
    const selestedCategory = courses.filter(cours => cours.category_id === id)
    res.send(selestedCategory)
})

// for all course API
app.get('/courses/all', (req, res) => {
    res.send(courses)
})


app.listen(port, () => {
    console.log(`Running on Port ${port}`)
})