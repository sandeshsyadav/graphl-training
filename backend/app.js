const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const movieResolvers = require('./resolvers/resolver')
const movieSchema = require('./schemas/schema')
const cors = require('cors')

mongoose.connect('mongodb+srv://sandeshsyadav:hclnia123@movie-maker-app.y93lkgy.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewURLParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log(`CONNECTION TO MONGODB WAS SUCCESSFUL!`)
}).catch((err) => {
    console.log(`ERROR AT ${err}`)
})

const corsOptions = { 
    // origin:'https://abc.onrender.com',
    AccessControlAllowOrigin: '*',  
    origin: '*',  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' 
  }

app.use(cors(corsOptions))
// var source = "{ hello }"

// graphql({ schema, source, rootValue }).then(response => {
//   console.log(response)
// })

app.get('/health', (req, res) => {
    res.send('Everything is OK!!')
})

app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    rootValue: movieResolvers,
    graphiql: true
}))





app.listen('4000', () => {
    console.log(`Server started on port 4000`)
})