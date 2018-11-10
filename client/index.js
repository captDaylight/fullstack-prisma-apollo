import React from 'react';
import { render } from 'react-dom';
import Auth from './components/Auth';

const App = () => (
  <div>
    Hi
    <Auth type="SIGNUP" />
  </div>
);

render(<App />, document.getElementById('app'));
