import SuppControl from './SuppControl'
import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import AddSupp from './AddSupp';
import Cart from './Cart';
import Login from './Login';
import SuppList from './SuppList';
import { render } from '@testing-library/react';
import Context from "./Context";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: []
    };
    this.routerRef = React.createRef();
  }
  componentDidMount() {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
    this.setState({ user });
  }
  login = async (email, password) => {
    const res = await axios.post(
      'http://localhost:3001/login',
      { email, password },
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })
  
    if(res.status === 200) {
      const { email } = jwt_decode(res.data.accessToken)
      const user = {
        email,
        token: res.data.accessToken,
        accessLevel: email === 'admin@example.com' ? 0 : 1
      }
  
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }
  
  logout = e => {
    e.preventDefault();
    this.setState({ user: null });
    localStorage.removeItem("user");
  };
  render() {
    return (
      <Context.Provider
          value={{
            ...this.state,
            removeFromCart: this.removeFromCart,
            addToCart: this.addToCart,
            login: this.login,
            addSupp: this.addSupp,
            clearCart: this.clearCart,
            checkout: this.checkout
          }}
        >
          <Router ref={this.routerRef}>
          <h1>Action Supplements</h1>
          <label onClick={e => {
            e.preventDefault();
            this.setState({ showMenu: !this.state.showMenu });
          }}>

          </label>
                  <Link to="/SuppList">
                    Products
                  </Link>
                  {this.state.user && this.state.user.accessLevel < 1 && (
                    <Link to="/add-product">
                      Add Product
                    </Link>
                  )}
                  <Link to="/cart">
                  Cart
                  <span>
                    { Object.keys(this.state.cart).length }
                  </span>
                </Link>
                {!this.state.user ? (
                  <Link to="/login">
                    Login
                  </Link>
                ) : (
                  <Link to="/" onClick={this.logout}>
                    Logout
                  </Link>
                )}
                <Switch>
                  <Route exact path="/" component={SuppList} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/cart" component={Cart} />
                  <Route exact path="/add-Supp" component={AddSupp} />
                  <Route exact path="/supplements" component={SuppList} />
                </Switch>
          </Router>
        </Context.Provider>
    )
  }
} 
