import React from 'react';
import { Query } from 'react-apollo';
import { Redirect, Route } from 'react-router-dom';
import { GET_AUTH_STATUS } from '../apollo/queries';

const ProtectedRoute = ({
  component: Component,
  unAuthenticatedOnly,
  authenticatedOnly,
  ...rest
}) => (
  <Route
    {...rest}
    render={() => (
      <Query
        query={GET_AUTH_STATUS}
      >
        {
          ({ data, loading, error }) => {
            if (loading) return <span>loading...</span>;
            if (error) return <span>error.</span>;

            if (authenticatedOnly && !data.isLoggedIn.status) return <Redirect to="/login" />;
            if (unAuthenticatedOnly && data.isLoggedIn.status) return <Redirect to="/dashboard" />;

            return <Component />;
          }
        }
      </Query>
    )}
  />
);

export default ProtectedRoute;
