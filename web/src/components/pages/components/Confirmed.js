import React, { Component } from "react";
import Container from "../../container";
import { FormatCurrent } from "../../pages/MainShop/components";
class Confirmed extends Component {
  constructor(props) {
    super(props);
    const { state } = this.props.location;
    console.log(state);
    if (!state) return (window.location.href = "/");
  }
  render() {
    const { state } = this.props.location;
    const { email, itemOders, total } = state.cartInfo;
    console.log(state);
    return (
      <Container>
        <div className="container">
          <div className="row">
            <div id="content-wrapper" className="col-12 clearfix">
              <section id="main">
                <section id="content-hook_order_confirmation" className="card">
                  <div className="card-block">
                    <div className="row">
                      <div className="col-md-12">
                        <h3 className="h1 card-title">
                          <i className="fas fa-check mr-2 done" />
                          Your order is confirmed
                        </h3>
                        <p>
                          An email has been sent to your mail address: {email}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  id="content"
                  className="page-content page-order-confirmation card"
                >
                  <div className="card-block">
                    <div className="row">
                      <div id="order-items" className="col-md-12">
                        <h3 className="card-title h3">Order items</h3>
                        <div className="order-confirmation-table">
                          {itemOders.map(item => (
                            <div key={item.id} className="order-line row">
                              <div className="col-sm-2 col-3">
                                <span className="image">
                                  <img src="https://via.placeholder.com/150" />
                                </span>
                              </div>
                              <div className="col-sm-4 col-9 details">
                                <span>{item.product.name}</span>
                              </div>
                              <div className="col-sm-6 col-12 qty">
                                <div className="row">
                                  <div className="col-5 text-sm-right text-xs-left price">
                                    <FormatCurrent money={item.price} />
                                  </div>
                                  <div className="col-2">{item.quantity}</div>
                                  <div className="col-5 text-xs-right bold price">
                                    <FormatCurrent
                                      money={item.price * item.quantity}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}

                          <hr />
                          <table>
                            <tbody>
                              <tr className="font-weight-bold">
                                <td>
                                  <span className="text-uppercase">Total</span>
                                </td>
                                <td className="price">
                                  <FormatCurrent money={total} />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Confirmed;
