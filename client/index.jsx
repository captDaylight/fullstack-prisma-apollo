import React from 'react';
import { render } from 'react-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Header from './components/Header';
import Landing from './components/Landing';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    credentials: 'include',
    uri: 'http://localhost:4000',
  }),
});

const App = () => (
  <Router>
    <ApolloProvider client={client}>
      <Header />

      <Route path="/signup" render={() => <Auth type="SIGNUP" />} />
      <Route path="/login" render={() => <Auth type="LOGIN" />} />
      <Route path="/" render={Landing} />
    </ApolloProvider>
  </Router>
);

render(<App />, document.getElementById('app'));
