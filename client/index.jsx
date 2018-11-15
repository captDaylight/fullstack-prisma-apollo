import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Auth from './components/Auth';

const client = new ApolloClient({ uri: 'http://localhost:4000' });

const App = () => (
  <ApolloProvider client={client}>
    Hi
    <Auth type="SIGNUP" />
  </ApolloProvider>
);

render(<App />, document.getElementById('app'));
