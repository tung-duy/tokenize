import Header from "./Header";
import { connect } from "react-redux";
import { requestAllCart } from "../../../redux/cart/service";

Header.defaultProps = {
  carts: []
};

const mapStateToProps = state => ({
  carts: state.Cart.carts,
  isAuthenticate: state.Auth.isAuthenticate
});

export default connect(
  mapStateToProps,
  { requestAllCart }
)(Header);
