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
          {console.log(data)}
          {
            (data.isLoggedIn && data.isLoggedIn.status)
              ? (
                <React.Fragment>
                  <Link to="/signup">sign up</Link>
                  <Link to="/login">log in</Link>
                </React.Fragment>
              )
              : <div>logout</div>
          }
        </header>
      )
    }

  </Query>
);

export default Header;
