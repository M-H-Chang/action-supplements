/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import AddSupp from './AddSupp';
import Cart from './Cart';
import Login from './Login';
import SuppList from './SuppList';
import Context from "./Context";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      supplements: []
    };
    this.routerRef = React.createRef();
  }
  async componentDidMount() {
    let user = localStorage.getItem("user");
    const supplements = await axios.get('http://localhost:3001/supplements')
    user = user ? JSON.parse(user) : null;
    this.setState({ user, supplements: supplements.data});
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
  addProduct = (supplement, callback) => {
    let supplements = this.state.supplements.slice();
  supplements.push(supplement);
    this.setState({supplements }, () => callback && callback());
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
          <nav
          css={css `
          text-align: center;
          `}
            className="navbar container"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <b className="navbar-item is-size-4 ">Action Supplements</b>
              <label
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showMenu: !this.state.showMenu });
                }}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </label>
            </div>
              <div 
              css={css `
              text-align: center;
              `}
              className={`navbar-menu ${
                  this.state.showMenu ? "is-active" : ""
                }`}>
                <Link to="/SuppList" className="navbar-item">
                  Supplements
                </Link>
                {this.state.user && this.state.user.accessLevel < 1 && (
                  <Link to="/AddSupp" className="navbar-item">
                    Add Supplement 
                  </Link>
                )}
                <Link to="/cart" className="navbar-item">
                  Cart 
                  <span
                    className="tag is-primary"
                    style={{ marginLeft: "5px" }}
                  >
                    {/* { Object.keys(this.state.cart).length } */}
                  </span>
                </Link>
                {!this.state.user ? (
                  <Link to="/login" className="navbar-item">
                    Login 
                  </Link>
                ) : (
                  <Link to="/" onClick={this.logout} className="navbar-item">
                    Logout
                  </Link>
                )}
              </div>
            </nav>
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
