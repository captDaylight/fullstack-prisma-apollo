import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Header from './components/Header';
import Landing from './components/Landing';

const client = new ApolloClient({ uri: 'http://localhost:4000' });

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
