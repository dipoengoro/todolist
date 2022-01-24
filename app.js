const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + '/date.js')

const app = express()
const PORT = 3000
let items = []

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  let day = date.getDate()
  res.render('list', {day: day, list: items})
})

app.post('/', (req, res) => {
  let item = req.body.newItem
  items.push(item)
  res.redirect('/')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT)
})
