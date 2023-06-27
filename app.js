const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.render('index')
})

app.listen(3000, () => {
  console.log('Express is listening on http://localhost:3000')
})