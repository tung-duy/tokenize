import action from "./action";
import Curl from "../../untils/Curl";
import { setToken } from "./helper";
import * as loadingBarAction from "../loadingbar/loadingBarAction";

function requestLogin(payload) {
  return (dispatch, getState) => {
    dispatch(loadingBarAction.calculatePiPending());
    dispatch(action.requestLogin());

    return Curl.post("/login", payload)
      .then(res => {
        const { data } = res;
        if (data.token) {
          setToken(data.token);
          dispatch(
            action.receiveLogin({
              isFetching: false,
              isAuthenticate: true
            })
          );
        }
        dispatch(
          action.receiveLogin({
            isFetching: false,
            isAuthenticate: false
          })
        );
        dispatch(loadingBarAction.calculatePiFulfilled());
      })
      .catch(err => {
        dispatch(
          action.receiveLogin({
            isFetching: false,
            isAuthenticate: false
          })
        );

        dispatch({
          type: "GET_ERRORS",
          payload: err.response.data
        });
      });
  };
}

export { requestLogin };
