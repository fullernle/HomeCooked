import { combineReducers } from "redux";
import session from "./SessionReducer";
import errors from "./ErrorsReducer";

const RootReducer = combineReducers({
  session,
	errors
});

export default RootReducer;
