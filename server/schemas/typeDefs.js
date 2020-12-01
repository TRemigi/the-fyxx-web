// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create typeDefs
const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    userType: String
    faveArtists: [Artist]
    favePieces: [ArtPiece]
    cart: [ArtPiece]
  }

  type Artist {
    _id: ID
    firstName: String
    lastName: String
    email: String
    bio: String
    pieces: [ArtPiece]
    favoritedBy: [User]
  }

  type ArtPiece {
    _id: ID
    artist: Artist
    pieceName: String
    image: Image
    media: String
    favoritedBy: [User]
    price: Int
  }

  type Image {
    name: String
    artPiece: ArtPiece
  }

  type Query {
    me: User
    users: [User]
    user(email: String!): User
    userType(lastName: String!): [User]
    artists: [Artist]
    artist(email: String!): Artist
    artPieces: [ArtPiece]
    artPiece(_id: ID!): ArtPiece
    images: [Image]
    image(_id: ID!): Image
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    changeUserType(lastName: String!): User
    addArtist(
      firstName: String!
      lastName: String!
      email: String!
      bio: String
    ): Artist
    addArtPiece(
      artist: String!
      pieceName: String!
      media: String!
      price: Int
    ): ArtPiece
  }
`;

//export the typeDefs
module.exports = typeDefs;
