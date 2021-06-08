const books = require('../data/books')
const authors = require('../data/authors')

const resolvers = {
  //QUERY
  Query: {
    books: () => books,
    book: (parent, args) => {
      //Warning... if dont' return, data will return null in
      console.log(parent)
      return books.find(book => {
          return book.id == args.id
        }
      )
    },
    authors: () => authors,
    author: (parent, args) => {
      return authors.find(author => author.id == args.id)
    }
  },
  Book:{
    author: (parent, args) => authors.find(author => author.id == parent.authorId)
  },
  Author:{
    books: (parent, args) => {
      return books(book => {
        return books.filter(book => book.authorId == parent.id)
      })
    }
  },

  //MUTATION
  Mutation: {
    createAuthor: (parent, args) => args,
    createBook: (parent, args) => args
  }
}

module.exports = resolvers;