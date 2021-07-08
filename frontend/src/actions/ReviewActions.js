import * as APIUtil from "../util/ReviewUtil";

export const RECEIVE_CURRENT_REVIEW = "RECEIVE_CURRENT_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const RESET_REVIEW_ERRORS = "RESET_REVIEW_ERRORS";
export const POST_REVIEW = "POST_REVIEW";

export const receiveCurrentReview = (review) => ({
  type: RECEIVE_CURRENT_REVIEW,
  review,
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});

export const resetReviewErrors = () => ({
	type: RESET_REVIEW_ERRORS
})

export const fetchReviews = (businessId) => (dispatch) =>
  APIUtil.fetchReviews(businessId).then(
    (data) => dispatch(receiveReviews(data.data)),
    (err) => dispatch(receiveErrors(err))
  );

export const createReview = (businessId, review) => (dispatch) => {
  APIUtil.createReview(businessId, review).then(
    (review) => dispatch(receiveCurrentReview(review.data)),
    (err) => dispatch(receiveErrors(err.response.data))
  );
};

// fetchReviews and display them