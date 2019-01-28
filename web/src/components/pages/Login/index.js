import { connect } from "react-redux";
import Login from "./Login";
import PropTypes from "prop-types";

import { requestLogin } from "../../../redux/auth/servers";

Login.propTypes = {
  isAuthenticate: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired
};

const mapStateToPros = state => ({ ...state.Auth, errors: state.errors });

export default connect(
  mapStateToPros,
  { requestLogin }
)(Login);
