const router = require('express').Router()

router.get('/', (res, req, next) => {
  try {
    res.send([
      { id: 1, content: 'I am a post' },
      { id: 2, content: 'I am another post' },
    ])
  } catch (error) {
    next(error)
  }
})

module.exports = router
