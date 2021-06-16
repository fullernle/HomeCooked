import { connect } from "react-redux";
import { fetchBusinesses } from "../../actions/business_actions";
import MapBox from "./mapbox";

const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.businesses.all),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapBox);
