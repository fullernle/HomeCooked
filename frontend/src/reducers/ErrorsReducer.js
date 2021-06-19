import { combineReducers } from "redux";
import BusinessErrorsReducer from "./BusinessErrorsReducer";
import ProductErrorsReducer from "./ProductErrorsReducer";
import SessionErrorsReducer from "./SessionErrorsReducer";
import ReviewErrorsReducer from './ReviewErrorsReducer';

export default combineReducers({
  session: SessionErrorsReducer,
  business: BusinessErrorsReducer,
  product: ProductErrorsReducer,
  review: ReviewErrorsReducer,
});
