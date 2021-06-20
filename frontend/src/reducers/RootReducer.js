import { combineReducers } from "redux";
import errors from "./ErrorsReducer";
import session from "./SessionReducer";
import ui from "./UiReducer";
import businesses from "./BusinessReducer";
import products from "./ProductReducer";
import carts from "./CartReducer";

const RootReducer = combineReducers({
  businesses,
  products,
  carts,
  session,
  errors,
  ui,
});

export default RootReducer;
