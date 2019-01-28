import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import { addToCart } from "../../../../../redux/cart/service";
ProductItem.defaultProps = {
  id: 0,
  name: "",
  price: 0,
  image: ""
};

export default connect(
  state => ({}),
  { addToCart }
)(ProductItem);
