import React, { Component } from "react";
import Container from "../../container";
import LoadingBar from "../../container/loadingBar";

import { Cart } from "./components";
import { Link } from "react-router-dom";
class Header extends Component {
  componentDidMount() {
    this.props.requestAllCart();
  }

  render() {
    const { carts, isAuthenticate } = this.props;
    return (
      <Container>
        <LoadingBar />
        <header className="header">
          <nav className="header-nav">
            <div className="container">
              <div className="header-nav-inner clearfix">
                <div
                  className="left-nav float-md-left wow bounceInRight"
                  style={{
                    visibility: "visible",
                    animationName: "bounceInRight"
                  }}
                >
                  <ul className="nav-links user-info">
                    <li>Welcome to our online store!</li>
                    {!isAuthenticate ? (
                      <li>
                        <Link
                          to="/login"
                          title="Log in to your customer account"
                        >
                          Login
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <a
                          href="/logout"
                          title="Log in to your customer account"
                        >
                          Logout
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <div
                  id="_desktop_nav"
                  className="right-nav float-md-right wow bounceInLeft"
                  style={{
                    visibility: "visible",
                    animationName: "bounceInLeft"
                  }}
                >
                  <div className="language-selector dropdown js-dropdown float-left">
                    <button
                      data-toggle="dropdown"
                      className="btn-unstyle"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Tiếng Việt
                      <i className="fa fa-angle-down" />
                    </button>
                    <div className="currency-selector dropdown js-dropdown float-left">
                      <ul className="dropdown-menu">
                        <li>
                          <a href="tungduy.com"> English</a>
                        </li>
                        <li>
                          <a href="tungduy.com"> Vietnam</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="header-top hidden-md-down">
            <div className="container">
              <div className="wrapper clearfix">
                <div className="wrapper-inner row">
                  <div
                    id="_desktop_logo"
                    className="headerLeft col-10 col-sm-10  col-md-4 col-lg-4"
                  >
                    <div
                      className="logo-theme wow bounceInLeft"
                      style={{
                        visibility: "visible",
                        animationName: "bounceInLeft"
                      }}
                    >
                      <a href="/">
                        <img
                          src="images/logo.png"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="position-static  col-12 col-sm-8 col-md-8 col-lg-6">
                    <div id="psstaticcontents" className="hidden-md-down">
                      <div className="feature-box row">
                        <div
                          className="col-12 col-md-6 wow bounceInRight"
                          data-wow-delay=".4s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.4s",
                            animationName: "bounceInRight"
                          }}
                        >
                          <div className="fbox-content media">
                            <div className="media-left">
                              <i className="fa fa-truck" />
                            </div>
                            <div className="fbox-body media-body">
                              <h4 className="fbox-title h6">
                                Free standard shipping
                              </h4>
                              <div className="description">
                                on all orders over $99
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12 col-md-6 wow bounceInRight"
                          data-wow-delay=".6s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.6s",
                            animationName: "bounceInRight"
                          }}
                        >
                          <div className="fbox-content media">
                            <div className="media-left">
                              <i className="fa fa-headphones" />
                            </div>
                            <div className="fbox-body media-body">
                              <h4 className="fbox-title h6">
                                AnnieFashion@gmail.com
                              </h4>
                              <div className="description">
                                012 - 345 - 6789
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="headerRight col-12 col-sm-9 col-md-2 wow bounceInRight"
                    data-wow-delay=".8s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.8s",
                      animationName: "bounceInRight"
                    }}
                  >
                    <div id="_desktop_cart">
                      <div className="text-lg-center blockcart cart-preview inactive">
                        <Cart carts={carts} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="container">
              <div className="wrapper-inner clearfix">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <button
                    id="btn-menu"
                    className="navbar-toggler wow fadeInLeft"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInLeft"
                    }}
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul
                      className="navbar-nav mr-auto wow fadeInLeft"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInLeft"
                      }}
                    >
                      <li className="nav-item ">
                        <a className="nav-link link-menu" href="/">
                          <span>Home</span>{" "}
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link link-menu" href="shop.html">
                          <span>Shop</span>{" "}
                          <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link link-menu" href="#">
                          <span>Blog</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link link-menu" href="#">
                          <span>Contact</span>
                        </a>
                      </li>
                    </ul>
                    <form
                      className="form-inline my-2 my-lg-0 wow fadeInRight"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInRight"
                      }}
                    >
                      <input
                        style={{
                          borderBottom: "1px solid #be7374",
                          borderRadius: 0
                        }}
                        className="form-control mr-sm-2 ps_search ui-autocomplete-input"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        style={{
                          cursor: "pointer",
                          background: "none",
                          color: "#be7374"
                        }}
                        className="btn  my-2 my-sm-0"
                        type="submit"
                      >
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                  <a
                    href="tungduy.com"
                    className="wow fadeInRight"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInRight"
                    }}
                  >
                    <i className="fa fa-shopping-bag cart-mobile float-right">
                      <span>2</span>
                    </i>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </Container>
    );
  }
}

export default Header;
