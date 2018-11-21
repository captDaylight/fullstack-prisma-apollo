import React from 'react';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { GET_AUTH_STATUS } from '../apollo/queries';
import { LOGOUT } from '../apollo/mutations';

const logoutUpdate = (cache, { data }) => {
  cache.writeQuery({
    query: GET_AUTH_STATUS,
    data: { isLoggedIn: data.logout },
  });
};

const Header = () => (
  <Query
    query={GET_AUTH_STATUS}
  >
    {
      ({ loading, error, data }) => (
        <header>
          HEADER
          {' '}
          {
            (!loading && !data.isLoggedIn.status)
              ? (
                <React.Fragment>
                  <Link to="/signup">sign up</Link>
                  <Link to="/login">log in</Link>
                </React.Fragment>
              )
              : (
                <Mutation
                  mutation={LOGOUT}
                  update={logoutUpdate}
                >
                  {logout => <button onClick={logout} type="button">logout</button>}
                </Mutation>
              )
          }
          {
            error && <span>error.</span>
          }
        </header>
      )
    }
  </Query>
);

export default Header;
