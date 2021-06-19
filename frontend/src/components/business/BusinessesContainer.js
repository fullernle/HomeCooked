import { connect } from "react-redux";
import { fetchBusinesses } from "../../actions/BusinessActions";
import { fetchProducts } from "../../actions/ProductActions";
import Businesses from "./Businesses";

const mSTP = (state, ownProps) => ({
  businesses: Object.values(state.businesses),
  products: Object.values(state.products)
});

const mDTP = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mSTP, mDTP)(Businesses);
