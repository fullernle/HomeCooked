import { combineReducers } from "redux";
import BusinessErrorsReducer from "./BusinessErrorsReducer";

import SessionErrorsReducer from "./SessionErrorsReducer";

export default combineReducers({
  session: SessionErrorsReducer,
  business: BusinessErrorsReducer,
});
