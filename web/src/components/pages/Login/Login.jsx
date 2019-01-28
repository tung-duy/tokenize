import React, { Component } from "react";
import classNames from "classnames";

export default class Login extends Component {
  constructor(props) {
    super(props);
    const { isAuthenticate, history } = props;
    if (isAuthenticate) return (window.location.href = "/");

    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidUpdate(props, state) {
    const { isAuthenticate, history } = props;
    if (isAuthenticate) return (window.location.href = "/");
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.requestLogin(this.state);
  };

  render() {
    const { isFetching, errors } = this.props;
    return (
      <form className="bg-light">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            className={classNames("form-control", {
              "is-invalid": errors.email
            })}
            onChange={this.handleOnChange}
          />
          {errors.email && (
            <div className="invalid-feedback login-from">{errors.email}</div>
          )}
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className={classNames("form-control", {
              "is-invalid": errors.password
            })}
            onChange={this.handleOnChange}
          />
          {errors.password && (
            <div className="invalid-feedback login-from">{errors.password}</div>
          )}
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          onClick={this.handleLogin}
          type="submit"
          className="btn btn-primary "
        >
          Submit {isFetching && <i className="fas fa-spinner fa-spin" />}
        </button>
      </form>
    );
  }
}
