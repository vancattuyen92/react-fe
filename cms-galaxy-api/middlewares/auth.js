const jwt = require('jsonwebtoken')

//  @route  POST/api/auth
//  @desc   Authenticate user
//  @access Public

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token')

  if(!token) {
    return res.status(403).json({
      msg: 'Access Denied',
      isAuth: false
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({
      msg: 'Invalid token',
      isAuth: false
    })
  }
}