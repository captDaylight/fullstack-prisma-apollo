import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SIGNUP, LOGIN } from '../apollo/mutations';

class Auth extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      isSignup: props.type === 'SIGNUP',
    };
  }

  render() {
    const {
      email,
      password,
      name,
      isSignup,
    } = this.state;

    return (
      <div>
        <h1>{isSignup ? 'Sign Up' : 'Log In'}</h1>

      </div>
    );
  }
}

Auth.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Auth;
