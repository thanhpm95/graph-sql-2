const Book = require('../models/Book')
const Author = require('../models/Author')

const mongoDataMethods = {
  getAllBook: async (condition = null) => condition === null ?  await Book.find(): await Book.find(conditon),
  getBookById: async (id) => await Book.findById(id),
  getAllAuthor: async () => await Author.find(),
  getAuthorById: async (id) => await Author.findById(id),
  createAuthor: async args => {
    // console.log(args)
    const newAuthor = new Author(args)
    // console.log(newAuthor)
    return await newAuthor.save()
  },
  createBook: async args =>{
    // console.log(args)
    const newBook = new Book(args)
    // console.log(newBook)
    return await newBook.save()
  }
}

module.exports = mongoDataMethods;