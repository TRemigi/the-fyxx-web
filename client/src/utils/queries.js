import gql from "graphql-tag";

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      email
      faveArtists {
        _id
      }
      favePieces {
        _id
      }
      cart {
        _id
      }
    }
  }
`;

export const QUERY_USERS = gql`
  {
    users {
      _id
      firstName
      lastName
      email
      faveArtists {
        _id
      }
      favePieces {
        _id
      }
      cart {
        _id
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      email
      faveArtists {
        _id
      }
      favePieces {
        _id
      }
      cart {
        _id
      }
    }
  }
`;
