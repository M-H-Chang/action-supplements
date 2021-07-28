import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import withContext from "./withContext";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });
  login = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: "Fill all fields!" });
    }
    this.props.context.login(username, password)
      .then((loggedIn) => {
        if (!loggedIn) {
          this.setState({ error: "Invalid Credentails" });
        }
      })
  };
  render() {

    return (
    this.props.context.user ? (
    <>
      <h2>Login</h2>
      <form onSubmit={this.login}>
        <label>Email: </label>
        <input
        type="email"
        name="username"
        onChange={this.handleChange}
        />
        <label>Password: </label>
        <input
        type="password"
        name="password"
        onChange={this.handleChange}
        />
        <button type="submit">Login</button>
        
  
      </form>
    </>
  
    ) : (
      <Redirect to="/SuppList" />
    )
  )
  }
}

export default withContext(Login);