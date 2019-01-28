import CheckOut from "./CheckOut";
import { connect } from "react-redux";
import { requestOrder } from "../../../redux/cart/service";
const mapStateToProps = state => {
  return { ...state.Cart, errors: state.errors };
};

export default connect(
  mapStateToProps,
  { requestOrder }
)(CheckOut);
