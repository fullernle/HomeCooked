import axios from 'axios';

export const fetchReview = reviewId => {
  return axios.get(`/api/reviews/${reviewId}`);
}

export const fetchReviews = () => {
  return axios.get(`/api/reviews`);
}

export const postReview = (data) => {
  return axios.post(`/api/reviews/_id`, data)
}

export const filterReviews = (reviewIds, reviews) => {
  let reviewArray = [];
  reviewIds.forEach(id => {
    reviewArray.push(reviews[id]);
  })

  return reviewArray;
}

// ---------------------------------------------------------
// change backend routes

export const createReview = (businessId, data) => {
  return axios.post(`api/business/${businessId}/review`, data);
}

// business/businessId/review
