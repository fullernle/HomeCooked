import {
  RECEIVE_CURRENT_REVIEW,
  RECEIVE_REVIEW_ERRORS,
  RECEIVE_REVIEWS,
} from "../actions/ReviewActions";

const _nullErrors = [];

const ReviewErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return _nullErrors;
    case RECEIVE_CURRENT_REVIEW:
      return _nullErrors;
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default ReviewErrorsReducer;
