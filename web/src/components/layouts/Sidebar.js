import React, { Component } from "react";
import Container from "../container";
class Sidebar extends Component {
  render() {
    return (
      <Container>
        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="col-inner">
            <div
              className="widget-module wow bounceInLeft"
              data-wow-delay=".2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "bounceInLeft"
              }}
            >
              <div id="pts-verticalmenu" className="pts-widget">
                <h3
                  className="verticalmenu_title title_block hidden-lg-up collapsed clearfix"
                  data-target="#verticalmenutop"
                  data-toggle="collapse"
                >
                  <i className="material-icons" />
                  All Departments
                </h3>
                <div id="verticalmenutop" className="collapse">
                  <ul className="nav navbar-nav verticalmenu">
                    <li className="aligned-left parent dropdown">
                      <a href="/" className="has-subhtml">
                        Personalised Gifts
                      </a>
                    </li>
                    <li className="aligned-left parent dropdown">
                      <a href="/" className="has-subhtml">
                        Garment Care
                      </a>
                    </li>
                    <li className="aligned-left parent dropdown">
                      <a href="/" className="has-subhtml">
                        Jewelry &amp; Accessories
                      </a>
                    </li>
                    <li className="aligned-left parent dropdown">
                      <a href="/" className="has-subhtml">
                        Occasion Gifts
                      </a>
                    </li>
                    <li className="aligned-left parent dropdown">
                      <a href="/" className="has-subhtml">
                        Office &amp; Stationery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="widget-ourservice wow bounceInLeft"
              data-wow-delay=".4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "bounceInLeft"
              }}
            >
              <div className="block card card-block style_list  clearfix">
                <div className="row">
                  <div className="col-12">
                    <div className="ourservice-wrap text-center">
                      <div className="ourservice-img">
                        <img
                          src="images/service-1.png"
                          alt=""
                          className="img-fluid img-service"
                        />
                      </div>
                      <div className="ourservice">
                        <h4 className="h4 ourservice-title">
                          Delivering quality gifts
                        </h4>
                        <div className="ourservice-content">
                          <p>information on its origins</p>
                        </div>
                      </div>
                    </div>
                    <div className="ourservice-wrap text-center">
                      <div className="ourservice-img">
                        <img
                          src="images/service-2.png"
                          alt=""
                          className="img-fluid img-service"
                        />
                      </div>
                      <div className="ourservice">
                        <h4 className="h4 ourservice-title">
                          Gifts for all occasions
                        </h4>
                        <div className="ourservice-content">
                          <p>Variants and technical</p>
                        </div>
                      </div>
                    </div>
                    <div className="ourservice-wrap text-center">
                      <div className="ourservice-img">
                        <img
                          src="images/service-3.png"
                          alt=""
                          className="img-fluid img-service"
                        />
                      </div>
                      <div className="ourservice">
                        <h4 className="h4 ourservice-title">
                          Great customer service
                        </h4>
                        <div className="ourservice-content">
                          <p>random Lipsum generator</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="widget-image mt-4 wow bounceInLeft"
              style={{ visibility: "visible", animationName: "bounceInLeft" }}
            >
              <div className="image-item card card-block">
                <a href="/">
                  <img src="images/banner1.jpg" alt="" className="img-fluid" />
                </a>
              </div>
            </div>
            <div
              className="widget-bloglatest wow bounceInLeft"
              data-wow-delay=".2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "bounceInLeft"
              }}
            >
              <div className="widget-latestblog card card-block p-50">
                <h4
                  className="title_block title_homepage wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <span>Articles</span>
                </h4>
                <div className="block_content">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-cus-12 col-6">
                      <div className="item grid_blog text-center">
                        <div className="blog-inner">
                          <h4 className="blog-title">
                            <a href="/">
                              <span>
                                At risus pretium urna tortor metus fringilla
                              </span>
                            </a>
                          </h4>
                          <div className="blog-meta clearfix">
                            <div className="blog-author">
                              <span>Admin Admin</span>
                            </div>
                            <div className="blog-created">16/11/2017</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-cus-12 col-6">
                      <div className="item grid_blog text-center">
                        <div className="blog-inner">
                          <h4 className="blog-title">
                            <a href="/">
                              <span>
                                At risus pretium urna tortor metus fringilla
                              </span>
                            </a>
                          </h4>
                          <div className="blog-meta clearfix">
                            <div className="blog-author">
                              <span>Admin Admin</span>
                            </div>
                            <div className="blog-created">16/11/2017</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-cus-12 col-6">
                      <div className="item grid_blog text-center">
                        <div className="blog-inner">
                          <h4 className="blog-title">
                            <a href="/">
                              <span>
                                At risus pretium urna tortor metus fringilla
                              </span>
                            </a>
                          </h4>
                          <div className="blog-meta clearfix">
                            <div className="blog-author">
                              <span>Admin Admin</span>
                            </div>
                            <div className="blog-created">16/11/2017</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix text-center">
                  <a href="/" className="btn btn-outline-pink mb-3">
                    View more articles
                  </a>
                </div>
              </div>
            </div>
            <div
              className="widget-testimonial mt-4 wow bounceInLeft"
              data-wow-delay=".4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "bounceInLeft"
              }}
            >
              <div className="card card-block block default">
                <div className="block_content clearfix ">
                  <div className="item">
                    <div className="t-avatar text-center">
                      <a href="/" className="magnific_item">
                        <img
                          src="images/sample-1.png"
                          alt=""
                          className="img-fluid magnific_item mx-auto rounded-circle"
                        />
                        <i className="fa fa-quote-right" />
                      </a>
                    </div>
                    <div className="t-body text-center">
                      <div className="t-quote">
                        "Aenean sollicitudin, lorem quis bibendum auctor,
                        nisi..."
                      </div>
                    </div>
                    <div className="t-profile clearfix text-center">
                      <span className="name">John doe 1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Sidebar;
