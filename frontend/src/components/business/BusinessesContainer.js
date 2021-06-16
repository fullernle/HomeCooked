import { connect } from "react-redux";
import { fetchBusinesses } from "../../actions/BusinessActions";
import Businesses from "./Businesses";

const mSTP = (state, ownProps) => ({
  businesses: state.businesses
});

const mDTP = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
});

export default connect(mSTP, mDTP)(Businesses);
