const router = require('express').Router()
const jwt = require('jsonwebtoken')

router.post('/register', (req, res, next) => {
  try {
    const { username, password } = req.body
    // In the project we will create a user in the DB, and add the id to jwt sign
    const token = jwt.sign({ username, password }, process.env.JWT_SECRET)
    res.send({
      message: 'Thanks for Signing up!',
      token: token,
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
