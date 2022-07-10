const router = require("express").Router()
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//model
const User = require('../models/User')
//@route GET /api/user
// @desc GET all user
// @access PUBLIC
router.get('/', async(req, res) => {
  try {
    const users = await User.find();

    const result = {
      isSuccess: true,
      data: users
    }
    return res.status(200).json(result)
  } catch (error) {
    res.status(500).json({
      msg: 'Server Error',
      isSuccess: false
    })
  }
})

//@route GET /api/user
// @desc GET all user
// @access PUBLIC
router.get('/:id', async(req, res) => {
  const id = req.params.id
  try {
    const user = await User.findById(id)

    const result = {
      isSuccess: true,
      data: user
    }
    return res.status(200).json(result)
  } catch (error) {
    res.status(500).json({
      msg: 'Server Error',
      isSuccess: false
    })
  }
})

//@route POST /api/users/register
// @desc register  user
// @access public
router.post('/register',
check('userName', 'User Name is required').not().isEmpty(),
check('email', 'Email is required').not().isEmpty().isEmail(),
check('password', 'Password is required').not().isEmpty(),
async(req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }

  const emailExist = await User.findOne({email: req.body.email})

  if(emailExist) {
    return res.status(400).json({
      msg: 'Email already exist',
      isSuccess: false
    })
  }

  // hash password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(req.body.password, salt)

  const user = new User({
    userName: req.body.userName,
    password: hashPassword,
    email: req.body.email
  })

  try {
    await user.save();
    res.status(200).json({
      message: 'Register successfully',
      isSuccess: true,
    })

  } catch (error) {
    res.status(500).json({
      msg: 'Server Error',
      isSuccess: false
    })
  }
})


// @route POST /api/users/login
// @desc Login user
// @access Public
router.post('/login',
  check('email', 'Email is required').not().isEmpty().isEmail(),
  check('password', 'Password is required').not().isEmpty(),
  async(req, res) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()) {
      return res.status(404).json({
        error: errors.array()
      })
    }

  //check email exist
  const user = await User.findOne({email: req.body.email})

  if(!user) {
    return res.status(400).json({
      msg: 'Email or password is wrong',
      isSuccess: false
    })
  }
  // validation password
  const password = await bcrypt.compare(req.body.password, user.password)
  if(!password) {
    return res.status(400).json({
      msg: 'Email or password is wrong',
      isSuccess: false
    })
  }

  //create && assign access token 
  const payload = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  }
  jwt.sign(
    payload,
    process.env.TOKEN,
    {expiresIn: 36000}, 
    (err, token) => {
      if(err) throw err 
      res.header('x-auth-token', token).json({
        token,
        msg: 'Login successfully!',
        isSuccess: true,
      })
    }
  )
})

module.exports = router