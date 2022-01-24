const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000
var items = []

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  var date = new Date()
  var currentDay = date.getDay()

  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }

  var day = date.toLocaleDateString('id-ID', options)
  res.render('list', {day: day, list: items})
})

app.post('/', (req, res) => {
  var item = req.body.newItem
  items.push(item)
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT)
})
