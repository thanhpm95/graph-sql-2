// const {gql} = require('apollo-server-express')
// import gql from 'graphql-tag';
const { gql } = require('graphql-tag')
 
const typeDefs = gql`
  type Book{
    id: ID!
    name: String
    genre: String
    author: Author
  }

  type Author{
    id: ID!
    fullName: String
    age: Int
    books: [Book]
  }

  # ROOT TYPE
  type Query{
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation{
    createAuthor(id: ID!, fullName: String, age: Int): Author,
    createBook(id: ID!, name: String, genre: String, authorId: ID! ): Book
  }
`

module.exports = typeDefs;