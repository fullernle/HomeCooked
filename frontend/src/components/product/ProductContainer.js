import { connect } from "react-redux";
import { fetchProduct } from "../../actions/ProductActions";
import Product from "./Product"


const mSTP = (state, ownProps) => ({
  product: state.products[ownProps.match.params.id],
});

const mDTP = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
});



export default connect(mSTP, mDTP)(Product);