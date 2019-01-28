import axios from "axios";
import { app } from "../config";
import { getToken } from "../redux/auth/helper";
axios.defaults.baseURL = app.appApi;
axios.defaults.headers.common["Authorization"] = getToken();
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.withCredentials = true;

export default axios;
