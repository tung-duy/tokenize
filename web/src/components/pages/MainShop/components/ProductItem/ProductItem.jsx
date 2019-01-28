import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormatCurrent } from "../";
export default class ProductItem extends Component {
  handleAddToCart = event => {
    event.preventDefault();
    const { id } = this.props;
    this.props.addToCart({ id });
  };
  render() {
    const { image, name, id, price } = this.props;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="item">
          <article className="product-miniature js-product-miniature">
            <div className="thumbnail-container">
              <div className="left-block text-center">
                <div className="inner-prod">
                  <a href="#" className="thumbnail product-thumbnail">
                    <figure>
                      <img
                        src="https://via.placeholder.com/250"
                        className="img-fluid img-prod"
                        alt=""
                      />
                    </figure>
                  </a>
                  <div className="ps_group text-center clearfix">
                    <div className="button-container cart">
                      <div className="btn-outline-pink">
                        <a href="#" onClick={this.handleAddToCart}>
                          {" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="btn-action">
                      <div
                        className="quick-view highlighted-informations no-variants"
                        style={{
                          display: "inline-block"
                        }}
                      >
                        <a className="quick-view-btn btn btn-product" href="/">
                          <i className="fa fa-search-plus" />
                        </a>
                      </div>
                      <div
                        className="wishlist"
                        style={{
                          display: "inline-block"
                        }}
                      >
                        <a className="quick-view-btn btn btn-product" href="/">
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                      <div
                        className="compare"
                        style={{
                          display: "inline-block"
                        }}
                      >
                        <a
                          className="leo-compare-button btn-product btn"
                          href="#"
                          data-id-product={9}
                          title="Add to Compare"
                        >
                          <span className="leo-compare-bt-loading cssload-speeding-wheel" />
                          <span className="leo-compare-bt-content">
                            <i className="fa fa-refresh" aria-hidden="true" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="product-flags">
                  <li className="new">New</li>
                </ul>
                <div className="product-price-and-shipping">
                  <span className="price">
                    <FormatCurrent money={price} />
                  </span>
                </div>
              </div>
              <div className="right-block product-description text-center clearfix">
                <div className="product-meta">
                  <h4 className="product-title">
                    <a href="#">{name}</a>
                  </h4>
                </div>
                <div className="leo-list-product-reviews">
                  <div className="leo-list-product-reviews-wraper">
                    <div className="star_content clearfix">
                      <div className="summary-ratting--star">
                        <span>
                          <i className="fa fa-star ratted" />
                        </span>
                        <span>
                          <i className="fa fa-star ratted" />
                        </span>
                        <span>
                          <i className="fa fa-star ratted" />
                        </span>
                        <span>
                          <i className="fa fa-star ratted" />
                        </span>
                        <span>
                          <i className="fa fa-star " />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
