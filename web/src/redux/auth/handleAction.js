const requestLogin = (state, payload = {}) => {
  return Object.assign({}, state, { isFetching: true });
};

const receiveLogin = (state, payload = {}) => {
  return Object.assign({}, state, { ...payload });
};

export default {
  requestLogin,
  receiveLogin
};
