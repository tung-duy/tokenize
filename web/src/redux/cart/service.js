import action from "./action";
import Curl from "../../untils/Curl";
import { enqueueSnackbar } from "../notification/notifiActions";

function requestAllCart(payload) {
  return (dispatch, getState) => {
    dispatch(action.requestAllCart());

    return Curl.get("/api/carts")
      .then(res => {
        const { data } = res;

        if (data.carts) {
          dispatch(
            action.receiveAllCart({
              carts: data.carts,
              isFetching: false
            })
          );
        }
      })
      .catch(err => {
        dispatch(
          action.receiveAllCart({
            isFetching: false
          })
        );
      });
  };
}

function addToCart(info = {}) {
  return (dispatch, getState) => {
    dispatch(action.addToCart());

    return Curl.post("/api/carts", info)
      .then(res => {
        const { data } = res;
        if (data.carts) {
          dispatch(
            action.receiveAllCart({
              carts: data.carts,
              isFetching: false
            })
          );
          dispatch(
            enqueueSnackbar({
              message: data.message,
              options: {
                variant: "success"
              }
            })
          );
        }
      })
      .catch(err => {
        dispatch(
          action.receiveAllCart({
            isFetching: false
          })
        );
      });
  };
}

function requestOrder(info, history) {
  return (dispatch, getState) => {
    dispatch(action.addToCart());

    return Curl.post("/api/carts/checkout", info)
      .then(res => {
        const { data } = res;
        dispatch(
          action.receiveAllCart({
            carts: [],
            isFetching: false
          })
        );
        dispatch(
          enqueueSnackbar({
            message: data.message,
            options: {
              variant: "info"
            }
          })
        );

        if (data.cartInfo) {
          history.push("/confirmed", { cartInfo: data.cartInfo });
        }
      })
      .catch(err => {
        dispatch(
          action.receiveAllCart({
            isFetching: false
          })
        );
        dispatch({
          type: "GET_ERRORS",
          payload: err.response.data
        });
      });
  };
}

function updateCart(info = {}) {
  return (dispatch, getState) => {
    dispatch(action.requestAllCart());
    return Curl.put(`/api/carts/${info.id}`, info)
      .then(res => {
        const { data } = res;

        if (data.carts) {
          dispatch(
            action.receiveAllCart({
              carts: data.carts,
              isFetching: false
            })
          );
        }
      })
      .catch(err => {
        dispatch(
          action.receiveAllCart({
            isFetching: false
          })
        );
      });
  };
}

function destroyCart(id) {
  return (dispatch, getState) => {
    dispatch(action.requestAllCart());
    return Curl.delete(`/api/carts/${id}`)
      .then(res => {
        const { data } = res;
        if (data.carts) {
          dispatch(
            action.receiveAllCart({
              carts: data.carts,
              isFetching: false
            })
          );
        }
      })
      .catch(err => {
        dispatch(
          action.receiveAllCart({
            isFetching: false
          })
        );
      });
  };
}

export { requestAllCart, addToCart, updateCart, destroyCart, requestOrder };
