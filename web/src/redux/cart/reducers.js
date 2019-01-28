import { REQUEST_ALL_CART, RECEIVE_ALL_CART, ADD_TO_CART } from "./actionType";
import Handle from "./handleAction";

const initState = {
  isFetching: false,
  carts: []
};

function CartReducer(state = initState, action) {
  switch (action.type) {
    case REQUEST_ALL_CART:
      return Handle.requestAllCart(state, action.payload);
    case RECEIVE_ALL_CART:
      return Handle.receiveAllCart(state, action.payload);
    case ADD_TO_CART:
      return Handle.addToCart(state, action.payload);
    default:
      return state;
  }
}

export default CartReducer;
