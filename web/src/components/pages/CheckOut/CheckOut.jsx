import React, { Component } from "react";
import classNames from "classnames";
import Container from "../../container";
import { FormatCurrent } from "../../pages/MainShop/components";

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      add: "",
      city: "",
      country: "Việt Nam",
      total: 0
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { carts } = nextProps;
    const totalPrice = carts.reduce(
      (a, item) => a + item.price * item.quantity,
      0
    );

    return { total: totalPrice };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOrder = event => {
    event.preventDefault();
    const { history } = this.props;
    this.props.requestOrder(this.state, history);
  };
  render() {
    const { carts, errors } = this.props;

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
                    <div className="content mt-3">
                      <div className="tab-content">
                        <div
                          className="tab-pane active"
                          id="checkout-guest-form"
                        >
                          <section>
                            <div className="form-group row ">
                              <label className="col-md-3 form-control-label required">
                                Full name{" "}
                                <span className="is_required text-danger">
                                  *
                                </span>
                              </label>
                              <div className="col-md-6">
                                <input
                                  name="name"
                                  type="text"
                                  className={classNames("form-control", {
                                    "is-invalid": errors.name
                                  })}
                                  defaultValue={this.state.name}
                                  onBlur={this.handleOnChange}
                                  placeholder="Please enter your name"
                                  required
                                />
                                {errors.name && (
                                  <div className="invalid-feedback login-from">
                                    {errors.name}
                                  </div>
                                )}
                              </div>
                              <div className="col-md-3 form-control-comment" />
                            </div>

                            <div className="form-group row ">
                              <label className="col-md-3 form-control-label required">
                                Email{" "}
                                <span className="is_required text-danger">
                                  *
                                </span>
                              </label>
                              <div className="col-md-6">
                                <input
                                  name="email"
                                  className={classNames("form-control", {
                                    "is-invalid": errors.email
                                  })}
                                  type="text"
                                  defaultValue={this.state.email}
                                  onBlur={this.handleOnChange}
                                  placeholder="Please enter your email"
                                  required
                                />
                                {errors.email && (
                                  <div className="invalid-feedback login-from">
                                    {errors.email}
                                  </div>
                                )}
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
                                  Address{" "}
                                  <span className="is_required text-danger">
                                    *
                                  </span>
                                </label>
                                <div className="col-md-6">
                                  <input
                                    name="add"
                                    placeholder="Please enter your address"
                                    type="text"
                                    className={classNames("form-control", {
                                      "is-invalid": errors.add
                                    })}
                                    required
                                    defaultValue={this.state.add}
                                    onBlur={this.handleOnChange}
                                  />
                                  {errors.add && (
                                    <div className="invalid-feedback login-from">
                                      {errors.add}
                                    </div>
                                  )}
                                </div>
                                <div className="col-md-3 form-control-comment" />
                              </div>

                              <div className="form-group row ">
                                <label className="col-md-3 form-control-label required">
                                  City{" "}
                                  <span className="is_required text-danger">
                                    *
                                  </span>
                                </label>
                                <div className="col-md-6">
                                  <input
                                    name="city"
                                    type="text"
                                    placeholder="Enter your city"
                                    maxLength={64}
                                    required
                                    className={classNames("form-control", {
                                      "is-invalid": errors.city
                                    })}
                                    defaultValue={this.state.city}
                                    onBlur={this.handleOnChange}
                                  />
                                  {errors.city && (
                                    <div className="invalid-feedback login-from">
                                      {errors.city}
                                    </div>
                                  )}
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
                                    name="country"
                                    required
                                    placeholder="Enter your country"
                                    defaultValue={this.state.country}
                                    onBlur={this.handleOnChange}
                                  />
                                </div>
                                <div className="col-md-3 form-control-comment" />
                              </div>
                              <div className="form-group row ">
                                <label className="col-md-3 form-control-label">
                                  Phone{" "}
                                  <span className="is_required text-danger">
                                    *
                                  </span>
                                </label>
                                <div className="col-md-6">
                                  <input
                                    name="phone"
                                    type="text"
                                    className={classNames("form-control", {
                                      "is-invalid": errors.phone
                                    })}
                                    placeholder="Enter your phone"
                                    required
                                    defaultValue={this.state.phone}
                                    onBlur={this.handleOnChange}
                                  />
                                  {errors.phone && (
                                    <div className="invalid-feedback login-from">
                                      {errors.phone}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="payment-confirmation">
                      <div className="ps-shown-by-js text-right">
                        {carts.length > 0 ? (
                          <button
                            type="submit"
                            className="btn btn-primary center-block"
                            onClick={this.handleOrder}
                          >
                            Order
                          </button>
                        ) : (
                          "Không có sản phẩm để đặt hàng"
                        )}
                      </div>
                    </div>
                  </section>
                </form>
              </div>
              <div className="col-md-4">
                <section id="js-checkout-summary" className="card js-cart">
                  <div className="card-block">
                    <div className="cart-summary-products">
                      <p className="cart-summary-item">{carts.length} item</p>
                    </div>
                    {carts.map(item => {
                      return (
                        <div
                          key={item.id}
                          className="cart-summary-line cart-summary-subtotals"
                          id="cart-subtotal-products"
                        >
                          <span className="label">{`${item.product.name} * ${
                            item.quantity
                          } : `}</span>
                          <span className="value">
                            <FormatCurrent money={item.price * item.quantity} />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <hr className="separator" />
                  <div className="card-block cart-summary-totals">
                    <div className="cart-summary-line cart-total">
                      <span className="label">Total Price: {""}</span>
                      <span className="value">
                        {" "}
                        <FormatCurrent money={this.state.total} />
                      </span>
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
