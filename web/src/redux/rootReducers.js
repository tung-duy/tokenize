import { loadingBarReducer } from "react-redux-loading-bar";
import AuthReducer from "./auth/reducers";
import ProductReducer from "./product/reducers";
import CartReducer from "./cart/reducers";
import notifi from "./notification/notifiReducer";
import errorReduces from "./errors/errorReduces";

export default {
  Auth: AuthReducer,
  Product: ProductReducer,
  Cart: CartReducer,
  notifications: notifi,
  errors: errorReduces,
  loadingBar: loadingBarReducer
};
