const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000
let items = []

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  let date = new Date()
  let currentDay = date.getDay()

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }

  let day = date.toLocaleDateString('id-ID', options)
  res.render('list', {day: day, list: items})
})

app.post('/', (req, res) => {
  let item = req.body.newItem
  items.push(item)
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT)
})
