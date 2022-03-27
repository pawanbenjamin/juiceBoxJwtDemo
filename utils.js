function authRequired(req, res, next) {
  if (!req.user) {
    next({
      name: 'Authorization Error',
      message: 'You must be logged in!',
    })
  }
  next()
}

module.exports = { authRequired }
