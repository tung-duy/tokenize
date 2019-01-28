import { REQUEST_ALL_CART, RECEIVE_ALL_CART, ADD_TO_CART } from "./actionType";

export const requestAllCart = payload => ({
  type: REQUEST_ALL_CART,
  payload
});
export const receiveAllCart = payload => ({
  type: RECEIVE_ALL_CART,
  payload
});
export const addToCart = payload => ({
  type: ADD_TO_CART,
  payload
});

export default { receiveAllCart, requestAllCart, addToCart };
