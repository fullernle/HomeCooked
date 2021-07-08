import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/BusinessActions";
import Business from "./Business";
import {filterProducts} from "../../util/ProductUtil";
import { fetchReviews, resetReviewErrors } from "../../actions/ReviewActions";

const mSTP = (state, ownProps) => ({
  business: state.businesses[ownProps.match.params.id],
	products: state.products,
  reviews: state.reviews,
  currentUser: state.session.user
});

const mDTP = (dispatch) => ({
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
  fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
  resetReviewErrors: () => dispatch(resetReviewErrors()),
});

export default connect(mSTP, mDTP)(Business);
