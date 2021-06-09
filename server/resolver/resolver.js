const books = require('../data/books')
const authors = require('../data/authors')

const Author = require('../models/Author')
const Book = require('../models/Book')

const resolvers = {
  //QUERY
  Query: {
    books: async (parent, args, { mongoDataMethods }) => {
      return await mongoDataMethods.getAllBook()
    },
    book: async (parent, { id }, { mongoDataMethods }) => { //id <=> args.id
      return await mongoDataMethods.getBookById(id)
    },
    authors: async (parent, args, { mongoDataMethods }) =>{
      return await mongoDataMethods.getAllAuthor()
    },
    author: async (parent, { id }, { mongoDataMethods }) => {
      return await mongoDataMethods.getAuthorById(id)
    }
  },
  Book:{
    author: async (parent, args, { mongoDataMethods }) => {
      return await mongoDataMethods.getAuthorById(authorId)
    }
  },
  Author:{
    books: async (parent, args, { mongoDataMethods }) => {
     return await mongoDataMethods.getBookById({authorId: id})
    }
  },

  //MUTATION
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethods }) => {
      // console.log(parent)
      return await mongoDataMethods.createAuthor(args)
    },
    createBook: async (parent, args, { mongoDataMethods }) => {
      // console.log(true,args)
      return await mongoDataMethods.createBook(args)
    }
  }
}

module.exports = resolvers;