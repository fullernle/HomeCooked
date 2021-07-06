import {
  RECEIVE_CURRENT_REVIEW,
  RECEIVE_REVIEWS,
} from "../actions/ReviewActions";

export default function (state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      let reviews = action.reviews;
      reviews.forEach((review) => {
        let id = review._id;
        newState[id] = review;
      });
      return newState;

    case RECEIVE_CURRENT_REVIEW:
      let review = action.review;
      newState[review._id] = review;
      return newState;

    default:
      return state;
  }
}
