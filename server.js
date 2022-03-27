const express = require('express')
const app = express()
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const { authRequired } = require('./utils')

require('dotenv').config()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  const auth = req.header('Authorization')
  const prefix = 'Bearer '
  if (!auth) {
    next()
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length)
    const { username, password } = jwt.verify(token, process.env.JWT_SECRET)
    // in our app we get the user from the db
    req.user = { username }
    next()
  } else {
    next({
      name: 'JWT ERROR',
      message: 'Somethings wrong with you auth token',
    })
  }
})

app.use('/auth', require('./routes/auth'))

app.use('/posts', authRequired, require('./routes/posts'))

app.use((error, req, res, next) => {
  res.send({ name: error.name, message: error.message })
})

app.listen(3000, () => {
  console.log('Server listening on PORT 3000...')
})
