import { REQUEST_ALL_PRODUCT, RECEIVE_ALL_PRODUCT } from "./actionType";
import Handle from "./handleAction";

const initState = {
  isFetching: false,
  products: []
};

function ProductReducer(state = initState, action) {
  switch (action.type) {
    case REQUEST_ALL_PRODUCT:
      return Handle.requestAllProduct(state, action.payload);
    case RECEIVE_ALL_PRODUCT:
      return Handle.receiveAllProduct(state, action.payload);
    default:
      return state;
  }
}

export default ProductReducer;
