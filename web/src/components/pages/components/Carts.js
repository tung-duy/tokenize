import React, { Component } from "react";
import Container from "../../container";
class Carts extends Component {
  render() {
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
                            <li className="cart-item">
                              <div className="product-line-grid">
                                {/*  product left content: image*/}
                                <div className="product-line-grid-left col-md-3 col-4">
                                  <span className="product-image media-middle">
                                    <img
                                      src="/images/service-2.png"
                                      alt="Charbonnel et Walker"
                                    />
                                  </span>
                                </div>
                                {/*  product left body: description */}
                                <div className="product-line-grid-body col-md-4 col-8">
                                  <div className="product-line-info">
                                    <a
                                      className="label"
                                      href="http://tungduy.com"
                                      data-id_customization={0}
                                    >
                                      Charbonnel et Walker
                                    </a>
                                  </div>
                                  <div className="product-line-info product-price h5 has-discount">
                                    <div className="product-discount">
                                      <span className="regular-price">
                                        $20.50
                                      </span>
                                    </div>
                                    <div className="current-price">
                                      <span className="price">$16.40</span>
                                    </div>
                                  </div>
                                  <br />
                                </div>
                                <div className="product-line-grid-right product-line-actions col-md-5 col-12">
                                  <div className="row">
                                    <div className="col-4 hidden-md-up" />
                                    <div className="col-md-10 col-6">
                                      <div className="row">
                                        <div className="col-md-6 col-6 qty">
                                          <div className="input-group bootstrap-touchspin">
                                            <span
                                              className="input-group-addon bootstrap-touchspin-prefix"
                                              style={{ display: "none" }}
                                            />
                                            <input
                                              className="js-cart-line-product-quantity form-control"
                                              type="text"
                                              defaultValue={1}
                                              name="product-quantity-spin"
                                              min={1}
                                              style={{ display: "block" }}
                                            />
                                            <span
                                              className="input-group-addon bootstrap-touchspin-postfix"
                                              style={{ display: "none" }}
                                            />
                                            <span className="input-group-btn-vertical">
                                              <button
                                                className="btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-up"
                                                type="button"
                                              >
                                                <i className="material-icons touchspin-up" />
                                              </button>
                                              <button
                                                className="btn btn-touchspin js-touchspin js-decrease-product-quantity bootstrap-touchspin-down"
                                                type="button"
                                              >
                                                <i className="material-icons touchspin-down" />
                                              </button>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-2 price">
                                          <span className="product-price">
                                            <strong>$16.40</strong>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-2 col-2 text-xs-right">
                                      <div className="cart-line-product-actions">
                                        <a
                                          className="remove-from-cart"
                                          rel="nofollow"
                                          href="http://tungduy.com"
                                          data-id-product={9}
                                          data-id-product-attribute={0}
                                          data-id-customization
                                        >
                                          <i className="fas fa-trash float-xs-left" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="clearfix" />
                              </div>
                            </li>
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
                              <span className="label js-subtotal">1 item</span>
                              <span className="value">$16.40</span>
                            </div>
                            <div
                              className="cart-summary-line"
                              id="cart-subtotal-shipping"
                            >
                              <span className="label">Shipping</span>
                              <span className="value">$7.00</span>
                              <div>
                                <small className="value" />
                              </div>
                            </div>
                          </div>
                          <hr className="separator" />
                          <div className="card-block">
                            <div className="cart-summary-line cart-total">
                              <span className="label">Total (tax excl.)</span>
                              <span className="value">$23.40</span>
                            </div>
                            <div className="cart-summary-line">
                              <small className="label">Taxes</small>
                              <small className="value">$0.00</small>
                            </div>
                          </div>
                          <hr className="separator" />
                        </div>
                        <div className="checkout cart-detailed-actions card-block">
                          <div className="text-xs-center">
                            <a href="/checkout" className="btn btn-primary">
                              Proceed to checkout
                            </a>
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

export default Carts;
