const express = require('express')
const app = express()
const morgan = require('morgan')

// this makes sure we can use .env variables in our app
require('dotenv').config()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', require('./routes/auth'))

app.use('/posts', require('./routes/posts'))

app.listen(3000, () => {
  console.log('Server listening on PORT 3000...')
})
