import React, { Component } from "react";
import Container from "../../container";
class Checkout extends Component {
  render() {
    return (
      <Container>
        <div className="container">
          <div id="content">
            <div className="row">
              <div className="col-md-8">
                <form
                  id="customer-form"
                  className="js-customer-form"
                  method="post"
                >
                  <section
                    id="checkout-personal-information-step"
                    className="checkout-step -current -reachable js-current-step"
                  >
                    <h1 className="step-title h3">
                      <span className="step-number">1</span>
                      Personal Information
                    </h1>
                    <div className="content">
                      <div className="tab-content">
                        <div
                          className="tab-pane active"
                          id="checkout-guest-form"
                        >
                          <section>
                            <div className="form-group row ">
                              <label className="col-md-3 form-control-label required">
                                Full name
                              </label>
                              <div className="col-md-6">
                                <input
                                  className="form-control"
                                  name="firstname"
                                  type="text"
                                  defaultValue=""
                                  placeholder="Please enter your name"
                                  required
                                />
                              </div>
                              <div className="col-md-3 form-control-comment" />
                            </div>

                            <div className="form-group row ">
                              <label className="col-md-3 form-control-label required">
                                Email
                              </label>
                              <div className="col-md-6">
                                <input
                                  className="form-control"
                                  name="email"
                                  type="email"
                                  defaultValue=""
                                  placeholder="Please enter your email"
                                  required
                                />
                              </div>
                              <div className="col-md-3 form-control-comment" />
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="checkout-step -unreachable"
                    id="checkout-addresses-step"
                  >
                    <h1 className="step-title h3">
                      <span className="step-number">2</span> Addresses
                    </h1>
                    <div className="content">
                      <div className="js-address-form">
                        <p>
                          The selected address will be used both as your
                          personal address (for invoice) and as your delivery
                          address.
                        </p>
                        <div id="delivery-address">
                          <div className="js-address-form">
                            <section className="form-fields">
                              <div className="form-group row ">
                                <label className="col-md-3 form-control-label required">
                                  Address
                                </label>
                                <div className="col-md-6">
                                  <input
                                    className="form-control"
                                    name="address"
                                    placeholder="Please enter your address"
                                    type="text"
                                    required
                                  />
                                </div>
                                <div className="col-md-3 form-control-comment" />
                              </div>

                              <div className="form-group row ">
                                <label className="col-md-3 form-control-label required">
                                  City
                                </label>
                                <div className="col-md-6">
                                  <input
                                    className="form-control"
                                    name="city"
                                    type="text"
                                    maxLength={64}
                                    required
                                  />
                                </div>
                                <div className="col-md-3 form-control-comment" />
                              </div>

                              <div className="form-group row ">
                                <label className="col-md-3 form-control-label required">
                                  Country
                                </label>
                                <div className="col-md-6">
                                  <input
                                    className="form-control form-control-select js-country"
                                    name="id_country"
                                    required
                                    defaultValue="Việt Nam"
                                  />
                                </div>
                                <div className="col-md-3 form-control-comment" />
                              </div>
                              <div className="form-group row ">
                                <label className="col-md-3 form-control-label">
                                  Phone
                                </label>
                                <div className="col-md-6">
                                  <input
                                    className="form-control"
                                    name="phone"
                                    type="text"
                                    placeholder="Enter your phone"
                                  />
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="payment-confirmation">
                      <div className="ps-shown-by-js text-right">
                        <button
                          type="submit"
                          disabled
                          className="btn btn-primary center-block"
                        >
                          Order with an obligation to pay
                        </button>
                      </div>
                    </div>
                  </section>
                </form>
              </div>
              <div className="col-md-4">
                <section id="js-checkout-summary" className="card js-cart">
                  <div className="card-block">
                    <div className="cart-summary-products">
                      <p className="cart-summary-item">1 item</p>
                    </div>
                    <div
                      className="cart-summary-line cart-summary-subtotals"
                      id="cart-subtotal-products"
                    >
                      <span className="label">Subtotal</span>
                      <span className="value">$8.40</span>
                    </div>
                    <div
                      className="cart-summary-line cart-summary-subtotals"
                      id="cart-subtotal-shipping"
                    >
                      <span className="label">Shipping</span>
                      <span className="value">$7.00</span>
                    </div>
                  </div>
                  <hr className="separator" />
                  <div className="card-block cart-summary-totals">
                    <div className="cart-summary-line cart-total">
                      <span className="label">Total (tax excl.)</span>
                      <span className="value">$15.40</span>
                    </div>
                    <div className="cart-summary-line">
                      <span className="label sub">Taxes</span>
                      <span className="value sub">$0.00</span>
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

export default Checkout;
