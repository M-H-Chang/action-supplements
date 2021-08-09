import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';

function AddSupp() {
  const defaultSupp = {
    name: "",
    price: "",
    stock: "",
    description: ""
  };

  save = async (e) => {
    e.preventDefault();
    const { name, price, stock, description } = this.state;

    if (name && price) {
      const id = Math.random().toString(36).substring(2) + Date.now().toString(36);

      await axios.post(
        'http://localhost:3001/products',
        { id, name, price, stock, description },
      )

      this.props.context.addProduct(
        {
          name,
          price,
          description,
          stock: stock || 0
        },
        () => this.setState(defaultSupp)
      );
      this.setState(
        { status: 'is-success', msg: 'Product created successfully' }
      );

    } else {
      this.setState(
        {  status: 'is-danger', msg: 'Please enter name and price' }
      );
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });


render (){
  const { name, price, stock, description } = this.state;
  const { user } = this.props.context;

  return !(user && user.accessLevel < 1) ? (
    <Redirect to='/' />
    
    <>
      AddSupp
    </>
  )
}
}

export default AddSupp;