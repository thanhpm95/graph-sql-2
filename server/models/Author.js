const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
  fullName: {
    type: String
  },
  age: {
    type: Number
  }
})

module.exports = mongoose.model('author', AuthorSchema);