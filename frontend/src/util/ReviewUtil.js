import axios from 'axios';

export const fetchReview = reviewId => {
  return axios.get(`/api/reviews/${reviewId}`);
}

export const fetchReviews = () => {
  return axios.get(`/api/reviews`);
}

export const postReview = (data) => {
  return axios.post(`/api/reviews/:id`, data)
}

export const filterReviews = (reviewIds, reviews) => {
  let reviewArray = [];
  reviewIds.forEach(id => {
    reviewArray.push(reviews[id]);
  })

  return reviewArray;
}
