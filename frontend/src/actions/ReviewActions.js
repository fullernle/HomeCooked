import * as APIUtil from "../util/ReviewUtil";

export const RECEIVE_CURRENT_REVIEW = "RECEIVE_CURRENT_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const POST_REVIEW = 'POST_REVIEW';

export const receiveCurrentReview = (review) => ({
  type: RECEIVE_CURRENT_REVIEW,
  review 
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});

export const postReview = (review) => ({
  type: POST_REVIEW,
  review 
})

export const fetchReview = (reviewId) => (dispatch) =>
  APIUtil.fetchReview(reviewId).then(
    (data) => dispatch(receiveCurrentReview(data)),
    (err) => dispatch(receiveErrors(err.response.data))
  );

export const fetchReviews = () => (dispatch) =>
  APIUtil.fetchReviews().then(
    (data) => dispatch(receiveReviews(data.data)),
    (err) => dispatch(receiveErrors(err))
  );

  export const createReview = (review) => (dispatch) => {
    APIUtil.postReview(review).then(
    (review) => dispatch(postReview(review)),
    (err) => dispatch(receiveErrors(err.response.review)))
  }