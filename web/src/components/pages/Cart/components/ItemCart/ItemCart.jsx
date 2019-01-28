import React, { Component } from "react";
import { FormatCurrent } from "../../../MainShop/components";
class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.quantity = React.createRef();
  }
  getToTotalPrice = (price, quantity) => {
    return quantity * price;
  };
  handleOnChange = event => {
    const { id, product, quantity } = this.props;

    let { value } = event.target;
    value = parseInt(value);
    if (isNaN(value)) {
      this.quantity.current.value = quantity;
      return alert("Vui lòng nhập số");
    }
    if (value <= 0) {
      this.quantity.current.value = quantity;
      return alert("Số lượng quá bé");
    }

    this.handleUpdateCart({
      id,
      qty: value
    });
  };
  handleOnClick = (event, type) => {
    let { quantity, id } = this.props;

    if (type === "plus") {
      ++quantity;
    }
    if (type === "mini") {
      if (quantity > 1) {
        --quantity;
      }
    }

    this.handleUpdateCart({
      id,
      qty: quantity
    });
  };
  handleUpdateCart = info => {
    const { isFetching } = this.props;
    if (!isFetching) {
      this.props.updateCart(info);
    }
  };
  handleDeleteCart = event => {
    event.preventDefault();
    const { id } = this.props;
    this.props.destroyCart(id);
  };
  componentDidUpdate() {
    const { quantity } = this.props;
    this.quantity.current.value = quantity;
  }

  render() {
    const { price, quantity, product } = this.props;
    const { name } = product;
    return (
      <li className="cart-item my-3">
        <div className="product-line-grid">
          {/*  product left content: image*/}
          <div className="product-line-grid-left col-md-3 col-4">
            <span className="product-image media-middle">
              <img
                src="https://via.placeholder.com/100"
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
                {name}
              </a>
            </div>
            <div className="product-line-info product-price h5 has-discount">
              <div className="current-price">
                <span className="price">
                  <FormatCurrent money={price} />
                </span>
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
                    <div
                      className="input-group bootstrap-touchspin"
                      style={{ width: "100%" }}
                    >
                      <span
                        className="input-group-addon bootstrap-touchspin-prefix"
                        style={{ display: "none" }}
                      />
                      <input
                        className="js-cart-line-product-quantity form-control"
                        type="text"
                        ref={this.quantity}
                        defaultValue={quantity}
                        name="product-quantity-spin"
                        min={1}
                        onBlur={this.handleOnChange}
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
                          onClick={e => {
                            this.handleOnClick(e, "plus");
                          }}
                        >
                          <i className="material-icons touchspin-up" />
                        </button>
                        <button
                          className="btn btn-touchspin js-touchspin js-decrease-product-quantity bootstrap-touchspin-down"
                          type="button"
                          onClick={e => {
                            this.handleOnClick(e, "mini");
                          }}
                        >
                          <i className="material-icons touchspin-down" />
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 col-2 price">
                    <span className="product-price">
                      <strong>
                        <FormatCurrent
                          money={this.getToTotalPrice(price, quantity)}
                        />
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-2 text-xs-right">
                <div className="cart-line-product-actions">
                  <a
                    className="remove-from-cart"
                    rel="nofollow"
                    href="#"
                    onClick={this.handleDeleteCart}
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
    );
  }
}

export default ItemCart;
