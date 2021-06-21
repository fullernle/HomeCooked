import { combineReducers } from "redux";
import BusinessErrorsReducer from "./BusinessErrorsReducer";
import CartErrorsReducer from "./CartErrorsReducer";
import ProductErrorsReducer from "./ProductErrorsReducer";
import SessionErrorsReducer from "./SessionErrorsReducer";

export default combineReducers({
  session: SessionErrorsReducer,
  business: BusinessErrorsReducer,
  product: ProductErrorsReducer,
  cart: CartErrorsReducer,
});
