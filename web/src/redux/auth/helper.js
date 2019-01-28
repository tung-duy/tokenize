import { app } from "../../config";
import jwt from "jwt-decode";

function setToken(_token) {
  localStorage.setItem(app.tokenKey, _token);
}

function getToken() {
  const _token = localStorage.getItem(app.tokenKey);

  return _token;
}

function removeToken() {
  localStorage.removeItem(app.tokenKey);
}
function checkToken(_token) {
  try {
    const decode = jwt(_token);
    return decode.exp > Date.now() / 1000 ? true : false;
  } catch (error) {
    return false;
  }
}

export { setToken, getToken, checkToken, removeToken };
