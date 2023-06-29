const express = require('express')
const exphbs = require('express-handlebars')
const { generatePassword } = require('./utils/password_generator')
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password, options })
})

app.listen(3000, () => {
  console.log('Express is listening on http://localhost:3000')
})