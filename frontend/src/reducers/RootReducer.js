import { combineReducers } from "redux";
import errors from "./ErrorsReducer";
import session from "./SessionReducer";
import ui from "./UiReducer";
import businesses from "./BusinessReducer";
import products from "./ProductReducer";
import reviews from './ReviewReducer';
import carts from "./CartReducer";

const RootReducer = combineReducers({
  businesses,
  products,
  carts,
  session,
  errors,
  ui,
  reviews,
});

export default RootReducer;
