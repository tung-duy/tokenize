import action from "./action";
import Curl from "../../untils/Curl";

function requestAllProduct(payload) {
  return (dispatch, getState) => {
    dispatch(action.requestAllProduct());

    return Curl.get("/api/products")
      .then(res => {
        const { data } = res;

        if (data.products) {
          dispatch(
            action.receiveAllProduct({
              products: data.products,
              isFetching: false
            })
          );
        }
      })
      .catch(err => {
        dispatch(
          action.receiveAllProduct({
            isFetching: false
          })
        );
      });
  };
}

export { requestAllProduct };
