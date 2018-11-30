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
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

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

      <ProtectedRoute unAuthenticatedOnly path="/signup" component={() => <Auth type="SIGNUP" />} />
      <ProtectedRoute unAuthenticatedOnly path="/login" component={() => <Auth type="LOGIN" />} />

      <ProtectedRoute authenticatedOnly path="/dashboard" component={Dashboard} />

      <Route path="/" render={Landing} exact />
    </ApolloProvider>
  </Router>
);

render(<App />, document.getElementById('app'));
