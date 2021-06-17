import { combineReducers } from "redux";
import errors from "./ErrorsReducer";
import session from "./SessionReducer";
import ui from "./UiReducer";
import businesses from "./BusinessReducer";
import products from "./ProductReducer";

const RootReducer = combineReducers({
  businesses,
  products,
  session,
  errors,
  ui,
});

export default RootReducer;
