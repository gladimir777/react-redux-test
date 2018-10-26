import React, { Component } from "react";
import { connect } from "react-redux";

import ShopingCart from "./ShopingCart";
import {
  fetchProduct,
  addProductToCart,
  removeProductFromCart
} from "../redux/action";

class Product extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  componentWillMount() {
    this.props.fetchProduct();
  }

  addToCart(e) {
    e.preventDefault();

    this.props.addProductToCart(e.target.value);
  }

  render() {
    const prod = this.props.products.products.map(product => {
      return (
        <div key={product.id}>
          <p>
            <span>{`Nombre: ${product.name}`}</span>
          </p>
          <p>
            <span>{`Precio:  ${product.precio}`}</span>
          </p>
          <button
            className="btn-primary"
            onClick={this.addToCart}
            value={product.id}
          >
            Add to cart
          </button>
        </div>
      );
    });

    return (
      <div>
        <h1>My products</h1>
        <div className="wraper">
          <div className="product-container">{prod}</div>
          <ShopingCart
            products={this.props.products.cart}
            remove={this.props.removeProductFromCart}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  { fetchProduct, addProductToCart, removeProductFromCart }
)(Product);
