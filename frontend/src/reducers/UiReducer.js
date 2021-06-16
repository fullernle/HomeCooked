import { combineReducers } from "redux";

import ModalReducer from "./ModalReducer";

const UiReducer = combineReducers({
  modal: ModalReducer,
});

export default UiReducer;
