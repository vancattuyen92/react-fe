const mongoose = require('mongoose');

async function connectDB(url) {
  try {
    await mongoose.connect(url);
    return console.log('connect to DB...');
  } catch (err) {
    return console.log('error db: ', err);
  }
}

module.exports = connectDB;