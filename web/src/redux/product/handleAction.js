const requestAllProduct = (state, payload = {}) => {
  return Object.assign({}, state, { isFetching: true });
};

const receiveAllProduct = (state, payload = {}) => {
  return Object.assign({}, state, { ...payload });
};

export default {
  requestAllProduct,
  receiveAllProduct
};
