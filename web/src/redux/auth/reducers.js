import { RECEIVE_LOGIN, REQUEST_LOGIN } from "./actionType";
import Handle from "./handleAction";

const initState = {
  isFetching: false,
  isAuthenticate: false
};

function AuthReducer(state = initState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Handle.requestLogin(state, action.payload);
    case RECEIVE_LOGIN:
      return Handle.receiveLogin(state, action.payload);
    default:
      return state;
  }
}

export default AuthReducer;
