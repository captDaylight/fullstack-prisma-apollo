import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_AUTH_STATUS } from '../apollo/queries';

const Header = () => (
  <Query
    query={GET_AUTH_STATUS}
  >
    {
      ({ data }) => (
        <header>
          header is logged in:
          {' '}
          {data.isLoggedIn ? 'yes' : 'no'}

          <Link to="/signup">sign up</Link>
          <Link to="/login">log in</Link>
        </header>
      )
    }

  </Query>
);

export default Header;
