import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_ARTIST = gql`
  mutation addArtist(
    $firstName: String!
    $lastName: String!
    $email: String!
    $bio: String
  ) {
    addArtist(
      firstName: $firstName
      lastName: $lastName
      email: $email
      bio: $bio
    ) {
      _id
      firstName
      lastName
      email
      bio
      pieces {
        _id
      }
      favoritedBy {
        _id
      }
    }
  }
`;

export const ADD_ARTPIECE = gql`
  mutation addArtPiece(
    $artist: String!
    $pieceName: String!
    $media: String!
    $price: Int
  ) {
    addArtPiece(
      artist: $artist
      pieceName: $pieceName
      media: $media
      price: $price
    ) {
      _id
      artist {
        _id
        firstName
        lastName
      }
      pieceName
      media
      price
    }
  }
`;
