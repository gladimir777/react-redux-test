import React, { Component } from "react";

class ShopingCart extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e) {
    this.props.remove(e.target.value);
    console.log(e.target.value);
  }

  render() {
    const products = this.props.products.map((product, index) => {
      return (
        <div key={index}>
          <p>
            <span>{`Name: ${product.name}`}</span>
          </p>
          <p>
            <span>{`Precio: ${product.precio}`}</span>
          </p>
          <button
            className="btn-danger"
            onClick={this.handleRemove}
            value={index}
          >
            Remove
          </button>
        </div>
      );
    });
    return (
      <div className="shoping-cart">
        {products && <h3>Shopping Cart</h3>}
        <div className="cart-wraper">{products}</div>
      </div>
    );
  }
}
export default ShopingCart;
