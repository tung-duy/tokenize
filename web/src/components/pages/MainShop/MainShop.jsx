import React, { Component } from "react";

import Container from "../../container";
import { Sidebar } from "../../layouts";

import { ProductItem } from "./components";
export default class MainShop extends Component {
  componentDidMount() {
    this.props.requestAllProduct();
  }
  renderProducts = () => {
    const { products } = this.props;
    return products.map(item => {
      return <ProductItem key={item.id} {...item} />;
    });
  };
  render() {
    return (
      <Container>
        <Sidebar />
        <div className="col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="col-inner">
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
                            {this.renderProducts()}
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
