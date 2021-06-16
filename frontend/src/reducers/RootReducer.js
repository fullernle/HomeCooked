import { combineReducers } from "redux";
import errors from "./errors_reducer";
import session from "./session_reducer";
import businesses from "./businesses_reducer";
import ui from "./UiReducer";

const RootReducer = combineReducers({
  session,
  businesses,
  errors,
	ui
});

export default RootReducer;
