import Cart from "./Cart";
import { connect } from "react-redux";
import { updateCart, destroyCart } from "../../../redux/cart/service";
const mapStateToProps = state => ({ ...state.Cart });

export default connect(
  mapStateToProps,
  {
    updateCart,
    destroyCart
  }
)(Cart);
