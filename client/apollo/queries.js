import { gql } from 'apollo-boost';

export const GET_AUTH_STATUS = gql`
  {
    authenticate {
      status
    }
  }
`;

export const GET_USER = gql`
  {
    user {
      id
      name
      email
      __typename
    }
  }
`;
