import { gql } from 'apollo-boost';

export const GET_AUTH_STATUS = gql`{ isLoggedIn }`;

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
