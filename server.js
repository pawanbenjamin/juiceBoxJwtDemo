const express = require('express')
const app = express()

require('dotenv').config()

app.use('/auth', require('./routes/auth'))

app.listen(3000, () => {
  console.log('Server listening on PORT 3000...')
})
