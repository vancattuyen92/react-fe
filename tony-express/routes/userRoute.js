const router = require('express').Router();
const bcrypt = require('bcrypt');

// model
const User = require('../models/userModel');

const error500 = {
  msg: 'Server Error',
  isSuccess: false
}

// @route         GET api/user
// @description   GET User List
router.get('/', (_, res) => {
  const result = {
    data: [
      {
        id: 1,
        name: 'tony'
      },
      {
        id: 2,
        name: 'katie'
      }
    ],
    page: 1,
    limit: 10,
    total: 100,
    isSuccess: true
  };

  try {
    res.status(200).json(result)
  } catch(err) {
    res.status(500).json(error500)
  }
})

// @route         GET api/user/:id
// @description   GET single user
router.get('/:id', (req, res) => {
  console.log('single user: ', req.params.id)
  res.send('get single user')
})

// @route   POST /api/user/register
// @desc    Register User
// @access  Public
router.post('/register', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body?.firstName || '';
  const lastName = req.body?.lastName || '';

  // check email exists
  await User.createCollection();
  const isEmailExists = await User.findOne({ email: email });
  if(isEmailExists) return res.status(400).json({
    msg: 'Email already exists',
    isSuccess: false
  });

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
 
  // create a new user
  const user = new User({
    firstName,
    lastName,
    email,
    password: hashPassword
  });

  try {
    await user.save();
    res.json({
      msg: 'Register successfully!',
      isSuccess: true
    })
  } catch (err) {
    res.status(400).json({
      msg: err,
      isSuccess: false
    })
  }
})

module.exports = router;