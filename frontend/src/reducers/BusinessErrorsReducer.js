import {
  RECEIVE_BUSINESSES,
  RECEIVE_BUSINESS_ERRORS,
  RECEIVE_CURRENT_BUSINESS,
} from "../actions/BusinessActions";

const _nullErrors = [];

const BussinessErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_BUSINESS:
      return _nullErrors;
    case RECEIVE_BUSINESSES:
      return _nullErrors;
    case RECEIVE_BUSINESS_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default BussinessErrorsReducer;
