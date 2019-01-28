import React, { Component } from "react";
import Container from "../../container";
import { ItemCart } from "./components";
import { FormatCurrent } from "../MainShop/components";
class Cart extends Component {
  renderItemCart = carts => {
    const { updateCart, destroyCart, isFetching } = this.props;
    if (carts.length <= 0) return <h3>Giỏ hàng trống</h3>;

    return carts.map(item => (
      <ItemCart
        updateCart={updateCart}
        destroyCart={destroyCart}
        key={item.id}
        isFetching={isFetching}
        {...item}
      />
    ));
  };
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
      <Container>
        <div id="wrapper">
          <div className="container">
            <div className="row">
              <div id="content-wrapper" className="col-12 clearfix">
                <section id="main">
                  <div className="cart-grid row">
                    {/* Left Block: cart product informations & shpping */}
                    <div className="cart-grid-body col-12 col-lg-8">
                      {/* cart products detailed */}
                      <div className="card cart-container">
                        <div className="card-block">
                          <h1 className="h1">Shopping Cart</h1>
                        </div>
                        <hr className="separator" />
                        <div className="cart-overview js-cart">
                          <ul className="cart-items">
                            {this.renderItemCart(carts)}
                          </ul>
                        </div>
                      </div>
                      <a className="label" href="/">
                        <i className="fas fa-long-arrow-alt-left mr-2" />
                        Continue shopping
                      </a>
                      {/* shipping informations */}
                    </div>
                    {/* Right Block: cart subtotal & cart total */}
                    <div className="cart-grid-right col-12 col-lg-4">
                      <div className="card cart-summary">
                        <div className="cart-detailed-totals">
                          <div className="card-block">
                            <div
                              className="cart-summary-line"
                              id="cart-subtotal-products"
                            >
                              <span className="label js-subtotal">
                                Total Item: {""}
                              </span>
                              <span className="value">{carts.length}</span>
                            </div>
                          </div>
                          <hr className="separator" />
                          <div className="card-block">
                            <div className="cart-summary-line cart-total">
                              <span className="label">Total Price: {""}</span>
                              <span className="value">
                                {this.getTotalPrice()}
                              </span>
                            </div>
                          </div>
                          <hr className="separator" />
                        </div>
                        <div className="checkout cart-detailed-actions card-block">
                          <div className="text-xs-center">
                            {carts.length > 0 && (
                              <a href="/checkout" className="btn btn-primary">
                                Checkout
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Cart;
