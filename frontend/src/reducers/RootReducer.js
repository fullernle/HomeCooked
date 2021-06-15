import { combineReducers } from "redux";
import session from "./SessionReducer";
import errors from "./ErrorsReducer";
import ui from "./UiReducer";
import businesses from "./BusinessReducer";

const RootReducer = combineReducers({
	businesses,
  session,
	errors,
	ui
});

export default RootReducer;
