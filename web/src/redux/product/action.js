import { REQUEST_ALL_PRODUCT, RECEIVE_ALL_PRODUCT } from "./actionType";

export const requestAllProduct = payload => ({
  type: REQUEST_ALL_PRODUCT,
  payload
});
export const receiveAllProduct = payload => ({
  type: RECEIVE_ALL_PRODUCT,
  payload
});

export default { receiveAllProduct, requestAllProduct };
