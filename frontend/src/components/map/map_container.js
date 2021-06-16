import { connect } from "react-redux";
import { fetchBusinesses } from "../../actions/BusinessActions";
import MapBox from "./mapbox";

const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.businesses),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapBox);
