import { connect } from "react-redux";
import { fetchBusinesses } from "../../actions/BusinessActions";
import MapBox from "./MapBox";

const mSTP = (state, ownProps) => ({
  businesses: Object.values(state.businesses),
});

const mDTP = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
});

export default connect(mSTP, mDTP)(MapBox);
