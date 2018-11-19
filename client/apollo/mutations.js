import { gql } from 'apollo-boost';

export const SIGNUP = gql`
  mutation SignupMutation($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
      email
      __typename
    }
  }
`;

export const LOGIN = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      __typename
    }
  }
`;

export const LOGOUT = gql`
  mutation LogoutMutation {
    logout {
      status
      __typename
    }
  }
`;
