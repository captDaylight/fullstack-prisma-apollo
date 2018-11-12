import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
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

        <Mutation
          mutation={isSignup ? SIGNUP : LOGIN}
          variables={isSignup ? { email, name, password } : { email, password }}
          onCompleted={(res) => console.log('complete', res)}
        >
          {
            (mutation, { error }) => {
              <form>
                {
                  isSignup
                  && (
                    <React.Fragment>
                      <label htmlFor="auth-name">Name</label>
                      <input
                        type="name"
                        name="auth-name"
                        id="auth-name"
                        value={name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                        required
                      />
                    </React.Fragment>
                  )
                }

                <label htmlFor="auth-email">Email</label>
                <input
                  type="email"
                  name="auth-email"
                  id="auth-email"
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  required
                />

                <label htmlFor="auth-password">Password</label>
                <input
                  type="password"
                  name="auth-password"
                  id="auth-password"
                  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  required
                />
              </form>
            }
          }
        </Mutation>
      </div>
    );
  }
}

Auth.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Auth;
