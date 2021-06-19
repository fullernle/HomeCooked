import { connect } from "react-redux";
import { fetchReviews, postReview } from '../../actions/ReviewActions';
import Reviews from './Reviews';

const mSTP = (state, ownProps) => ({
  reviews: state.reviews[ownProps.match.params.id]
})

const mDTP = (dispatch) => ({
  fetchReviews: (reviewsId) => dispatch(fetchReviews(reviewsId)),
  postReview: (data) => dispatch(postReview(data)),
});

export default connect(mSTP, mDTP)(Reviews);