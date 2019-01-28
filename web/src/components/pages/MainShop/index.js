import MainShop from "./MainShop";
import { connect } from "react-redux";
import { requestAllProduct } from "../../../redux/product/service";

const mapStateToProps = state => ({ products: state.Product.products });
export default connect(
  mapStateToProps,
  { requestAllProduct }
)(MainShop);
