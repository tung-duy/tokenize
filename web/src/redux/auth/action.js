import { REQUEST_LOGIN, RECEIVE_LOGIN } from "./actionType";

export const requestLogin = payload => ({ type: REQUEST_LOGIN, payload });
export const receiveLogin = payload => ({ type: RECEIVE_LOGIN, payload });
export default { requestLogin, receiveLogin };
