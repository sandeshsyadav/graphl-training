var { buildSchema } = require("graphql")


var schema = buildSchema(`
  type Query {
    listMovies: [Movies]
  }

  type Mutation {
    addMovie(name: String!, genre: String!, year: String!): Movies
  }
  type Movies {
    name: String,
    genre: String,
    year: String
  }
`)

module.exports = schema