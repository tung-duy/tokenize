const requestAllCart = (state, payload = {}) => {
  return Object.assign({}, state, { isFetching: true });
};

const receiveAllCart = (state, payload = {}) => {
  return Object.assign({}, state, { ...payload });
};

const addToCart = (state, payload = {}) => {
  return Object.assign({}, state, { isFetching: true });
};

export default {
  requestAllCart,
  receiveAllCart,
  addToCart
};
