import { connect } from "react-redux";
import {
  addToCart,
  fetchCart,
  subtractFromCart,
} from "../../actions/CartActions";
import Cart from "./Cart";

const mSTP = (state, ownProps) => ({
  user: state.session.user,
	carts: state.carts
});

const mDTP = (dispatch) => ({
  fetchCart: (userId) => dispatch(fetchCart(userId)),
  addToCart: (product) => dispatch(addToCart(product)),
  subtractFromCart: (product) => dispatch(subtractFromCart(product)),
});

export default connect(mSTP, mDTP)(Cart);
