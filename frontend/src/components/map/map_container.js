import { connect } from "react-redux";
import { fetchBusinesses } from "../../actions/BusinessActions";
import MapBox from "./mapbox";

<<<<<<< HEAD
const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.businesses),
  };
};
=======
const mSTP = (state, ownProps) => ({
  businesses: Object.values(state.businesses),
});
>>>>>>> b2370e7174afc90b7454331ca7e9c00b652a5a44

const mDTP = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
});

export default connect(mSTP, mDTP)(MapBox);
