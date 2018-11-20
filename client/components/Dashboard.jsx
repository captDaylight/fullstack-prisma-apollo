import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER } from '../apollo/queries';

const Dashboard = () => (
  <Query
    query={GET_USER}
  >
    {
      ({ data, loading }) => (
        <div>
          Welcome to your dashboard
          {' '}
          {!loading ? data.user.email : 'loading...'}
        </div>
      )
    }
  </Query>

);

export default Dashboard;
