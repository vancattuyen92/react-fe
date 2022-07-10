const mongoose = require('mongoose')

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  banner: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
})

module.exports = mongoose.model('Film', filmSchema)