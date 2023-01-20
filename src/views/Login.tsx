import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.scss'

interface LoginState {
  username: string;
  password: string;
}

interface State extends LoginState {

  shouldRedirect: boolean;
}


class LoginPage extends Component<{}, State> {
  state = {
    username: '',
    password: '',
    shouldRedirect: false
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<State, keyof LoginState>);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ shouldRedirect: true });
  };

  render() {
    const { username, password } = this.state;
    const isSubmitDisabled = !username || !password;

    return (
      <>
        {this.state.shouldRedirect && <Navigate to="/dashboard" />}
        <form onSubmit={this.handleSubmit} className="login__container">
          <h1>Lorem Ipsum Title</h1>
          <p>Welcome to our login page!</p>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="Enter your username"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Enter your password"
            />
          </label>
          <button type="submit" disabled={isSubmitDisabled}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default LoginPage;