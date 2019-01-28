import React, { Component } from "react";
import Container from "../../container";
import { Sidebar } from "../../layouts";

class MainShop extends Component {
  render() {
    return (
      <Container>
        <Sidebar />
        <div className="col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="col-inner">
            {/* Product Shop page */}
            <div className="pts-row-wrap mb-4">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="col-inner">
                    <div className="widget-productlist">
                      <div className="card card-block widget-products px-4">
                        <h4
                          className="title_block title_homepage wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp"
                          }}
                        >
                          Feature items
                        </h4>
                        <div className="block-category py-4">
                          <div className="category-cover">
                            <img
                              className="img-fluid"
                              src="images/14-category_default.jpg"
                              alt="Garment Care"
                            />
                          </div>
                        </div>
                        <div
                          className="block_content mt-4"
                          style={{ padding: "10px 20px" }}
                        >
                          <div className="row item-prod">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                              <div className="item">
                                <article className="product-miniature js-product-miniature">
                                  <div className="thumbnail-container">
                                    <div className="left-block text-center">
                                      <div className="inner-prod">
                                        <a
                                          href="tungduy.com"
                                          className="thumbnail product-thumbnail"
                                        >
                                          <figure>
                                            <img
                                              src="images/115-home_default.jpg"
                                              className="img-fluid img-prod"
                                              alt=""
                                            />
                                          </figure>
                                        </a>
                                        <div className="ps_group text-center clearfix">
                                          <div className="button-container cart">
                                            <div className="btn-outline-pink">
                                              <a href="tungduy.com">
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
                                              <a
                                                className="quick-view-btn btn btn-product"
                                                href="/"
                                              >
                                                <i className="fa fa-search-plus" />
                                              </a>
                                            </div>
                                            <div
                                              className="wishlist"
                                              style={{
                                                display: "inline-block"
                                              }}
                                            >
                                              <a
                                                className="quick-view-btn btn btn-product"
                                                href="/"
                                              >
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
                                                  <i
                                                    className="fa fa-refresh"
                                                    aria-hidden="true"
                                                  />
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
                                        <span className="price">€10.18</span>
                                      </div>
                                    </div>
                                    <div className="right-block product-description text-center clearfix">
                                      <div className="product-meta">
                                        <h4 className="product-title">
                                          <a href="tungduy.com">
                                            {" "}
                                            Promise Figurine
                                          </a>
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
                          </div>
                        </div>

                        <div className="ps_sortPagiBar bottom-line clearfix mt-4 mb-4">
                          <nav className="pagination">
                            <ul className="page-list">
                              <li>
                                <span
                                  rel="prev"
                                  className="btn-outline-pink previous disabled js-search-link"
                                  disable="true"
                                >
                                  {/* <i class="fa fa-angle-left icon-left"></i> */}
                                  Previous
                                </span>
                              </li>
                              <li className="current">
                                <span
                                  rel="nofollow"
                                  className="disabled js-search-link"
                                >
                                  1
                                </span>
                              </li>
                              <li>
                                <a
                                  rel="nofollow"
                                  href="/"
                                  className="js-search-link"
                                >
                                  2
                                </a>
                              </li>
                              <li>
                                <a
                                  rel="next"
                                  href="/"
                                  className="btn-outline-pink next js-search-link"
                                >
                                  Next
                                  {/*<i class="fa fa-angle-right icon-right"></i>*/}
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Shop page */}
          </div>
        </div>
      </Container>
    );
  }
}

export default MainShop;
