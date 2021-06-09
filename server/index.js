const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const mongoose = require('mongoose')

// Load Schema & resolvers

const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

//load db methods 
const mongoDataMethods = require('./data/db')

// console.log(mongoDatamethods);
//Connect to Mongodb

const connectDB = async () =>{
  try{
    await mongoose.connect(`mongodb+srv://kid1412ubqn:thanhkid@cluster0.pfmwb.mongodb.net/Cluster0?retryWrites=true&w=majority`,{
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log("DATABASE CONNECT SUCCESS")
  }
  catch(err){
    console.log(err)
    process.exit()
  }
}

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () =>({ mongoDataMethods })
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000}, () =>{
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
})