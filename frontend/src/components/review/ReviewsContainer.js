import { connect } from "react-redux";
import { fetchReviews, createReview } from '../../actions/ReviewActions';
import Reviews from './Reviews';

const mSTP = (state, ownProps) => ({
  reviews: state.reviews,
  currentUser: state.session.user,
	errors: state.errors.review.errors
})

const mDTP = (dispatch) => ({
  fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
  createReview: (businessId, review) => dispatch(createReview(businessId, review)),
});

export default connect(mSTP, mDTP)(Reviews);

// ------------------------------------------------

// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import ReviewForm from './review_form';
// import { postReview, fetchProduct } from '../../actions/product_actions';
// import { selectProduct } from '../../reducers/selectors';

// const mapState = ({entities, session}, ownProps) => ({
//   userId: session.id,
//   product: selectProduct(entities, ownProps.match.params.productId)
// });

// const mapDispatch = dispatch => ({
//   postReview: review => dispatch(postReview(review)),
//   fetchProduct: productId => dispatch(fetchProduct(productId))
// });

// export default withRouter(connect(mapState, mapDispatch)(ReviewForm));