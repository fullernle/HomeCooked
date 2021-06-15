import { combineReducers } from "redux";
import session from "./SessionReducer";
import errors from "./ErrorsReducer";
import ui from "./UiReducer";

const RootReducer = combineReducers({
  session,
	errors,
	ui
});

export default RootReducer;
