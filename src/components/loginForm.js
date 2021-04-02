import React from 'react';
import LoginInput from './LoginIunput';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      login: '',
      password: '',
    };
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
    handleSubmit = (event) => {
      event.preventDefault();
      alert('login funcionou');
    }
    render({
      const { login, password } = this.state;
    }
      return (
      <section className="login-form">
        <h1>Login Form With React by: Liliane Soares </h1>
        <form
          onSubmit={this.handleSubmit}>
          <LoginInput value={login}
            onChange={this.handleChange} />
          <label>
            Password
         <input
              type="password"
              value={password}
              onChange={this.handleChange}
              name="password"
              id="password"
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;
