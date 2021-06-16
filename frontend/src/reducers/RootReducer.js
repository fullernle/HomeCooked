import { combineReducers } from "redux";
import errors from "./ErrorsReducer";
import session from "./SessionReducer";
import ui from "./UiReducer";
import businesses from "./BusinessReducer";

const RootReducer = combineReducers({
	businesses,
  session,
  errors,
	ui
});

export default RootReducer;
