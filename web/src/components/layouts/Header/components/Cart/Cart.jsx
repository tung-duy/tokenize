import React, { Component } from "react";
import { FormatCurrent } from "../../../../pages/MainShop/components";
import { Link } from "react-router-dom";
class Cart extends Component {
  getTotalPrice = () => {
    const { carts } = this.props;
    const totalPrice = carts.reduce(
      (a, item) => a + item.price * item.quantity,
      0
    );
    return <FormatCurrent money={totalPrice} />;
  };

  render() {
    const { carts } = this.props;
    return (
      <div className="header text-md-left">
        <Link to="/carts">
          <i className="shopping-cart material-icons">content_cut</i>
          <span className="cart-title">Cart: {carts.length} Item</span>
          <span className="cart-products-price">{this.getTotalPrice()}</span>
        </Link>
      </div>
    );
  }
}

export default Cart;
