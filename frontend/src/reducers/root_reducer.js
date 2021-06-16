import { combineReducers } from "redux";
import errors from "./errors_reducer";
import session from "./session_reducer";
import businesses from "./businesses_reducer";

const RootReducer = combineReducers({
  session,
  businesses,
  errors,
});

export default RootReducer;
