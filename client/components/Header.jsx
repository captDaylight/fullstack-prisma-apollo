import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    header
    <Link to="/signup">sign up</Link>
    <Link to="/login">log in</Link>
  </div>
);

export default Header;
