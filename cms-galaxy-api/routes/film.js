const router = require('express').Router()
const {check, validationResult} = require('express-validator');

//modules
const Film = require('../models/Film');
// middlewares
const auth = require('../middlewares/auth');

// @route GET /api/film
// @desc GET film list
// @access PUBLIC

router.get('/', async (req, res) => {
  const page = parseInt(req.query.page || 1)
  const limit = parseInt(req.query.limit || 10)
  const startOffset = (page - 1) * limit
  const endOffset = startOffset + limit

  try {
    const films = await Film.find().sort({data: -1})
    const total = films.length

    const result = {
      isSuccess: true,
      page,
      limit,
      total,
      data: films
    }
    if(total === 0) {
      res.status(200).json(result)
      return 
    }

    result.data = films.slice(startOffset, endOffset)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({
      msg: 'Server Error',
      isSuccess: false
    })
  }
})

// @route GET /api/film/:id
// @desc GET single film
// @access PUBLIC

  router.get('/:id',async (req, res) => {
    const id = req.params.id

    try {
      const film = await Film.findById(id)
      res.status(200).json({
        data: film,
        isSuccess: true
      })
    } catch (error) {
      res.status(500).json({
        msg: 'Server Error',
        isSuccess: false
      })
    }
  })

// @route POST /api/film
// @desc GET film list
// @access Private

router.post('/', [auth, check('title', 'Title is required').not().isEmpty(),
check('description', 'Description is required').not().isEmpty(),
check('banner', 'Banner is required').not().isEmpty(),
check('quote', 'Quote is required').not().isEmpty()
], async (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(404).json({
      errors: errors.array()
    })
  }

  const film = new Film({
    title: req.body.title,
    banner: req.body.banner,
    description: req.body.description,
    quote: req.body.quote
  })

  try {
    const saveFilm = await film.save()
    res.status(200).json({
      data: saveFilm,
      message: 'Add successfully',
      isSuccess: true,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Sever Error',
      isSuccess: false
    })
  }
})

// @route Delete /api/film/:id
// @desc delete film 
// @access Private

router.delete('/:id', auth, async(req, res) => {
  const id = req.params.id 

  try {
    const film = await Film.findByIdAndRemove(id)
    if(!film) {
      return req.status(400).json({
        msg: `Can't find item`,
        isSuccess: false
      })
    }
    res.status(200).json({
      isSuccess: true,
      msg: "Delete successfully"
    })
  } catch (error) {
    res.status(500).json({
      message: 'Sever Error',
      isSuccess: false
    })
  }
})

// @route PUT /api/film/:id
// @desc PUT film list
// @access Private

router.put('/:id',
[auth,check('title', 'Title is required').not().isEmpty(),
check('description', 'Description is required').not().isEmpty(),
check('banner', 'Banner is required').not().isEmpty() ],
async(req, res) => {
  const errors = validationResult(req);
    
  if(!errors.isEmpty()) {
    return res.status(404).json({
      error: errors.array()
    })
  }

  const id = req.params.id;

  //update film
  const filmItem = {}
  if(req.body.quote) filmItem.quote = req.body.quote
  if(req.body.banner) filmItem.banner = req.body.banner
  filmItem.title = req.body.title
  filmItem.description = req.body.description
  filmItem.updatedDate = Date.now()
  
  //save data
  try {
    const film = await Film.findOneAndUpdate(
      {_id: id}, {$set: filmItem},{ new: true })

      if(!film) {
        return res.status(400).json({
          data: null,
          msg: `Can't update film`,
          isSuccess: false
        })
      }
      res.status(200).json({
        msg: `Update successfully!`,
        isSuccess: true
      })

  } catch (error) {
    res.status(500).json({
      message: 'Sever Error',
      isSuccess: false
    })
  }
})
module.exports = router