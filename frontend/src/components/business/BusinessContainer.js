import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/BusinessActions";
import Business from "./Business";

const mSTP = (state, ownProps) => ({
  business: state.businesses[ownProps.match.params.id],
});

const mDTP = (dispatch) => ({
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
});

export default connect(mSTP, mDTP)(Business);
