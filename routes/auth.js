const router = require('express').Router()
const jwt = require('jsonwebtoken')

router.post('/register', (req, res, next) => {
  try {
    const { username, password } = req.body
    const token = jwt.sign({ username, password }, process.env.JWT_SECRET)
    res.send({
      message: 'Thanks for Signing Up!',
      token: token,
    })
  } catch (error) {
    next(error)
  }

  // use the username and password to create a user in the DB
})

module.exports = router
