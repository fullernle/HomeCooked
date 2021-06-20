import { connect } from "react-redux";
import { addToCart } from "../../actions/CartActions";
import Product from "./Product"


const mSTP = (state, ownProps) => ({
	session: state.session
});

const mDTP = (dispatch) => ({
	addToCart: (cartId, product) => dispatch(addToCart(cartId, product))
});



export default connect(mSTP, mDTP)(Product);