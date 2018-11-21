import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER } from '../apollo/queries';

const Dashboard = () => (
  <Query
    query={GET_USER}
  >
    {
      ({ loading, error, data }) => {
        if (loading) return <span>loading...</span>;
        if (error) return <span>error.</span>;

        return (
          <div>
            Welcome to your dashboard
            {' '}
            {data.user.email}
          </div>
        );
      }
    }
  </Query>

);

export default Dashboard;
