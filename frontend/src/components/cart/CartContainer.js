import { connect } from "react-redux";
import {
  addToCart,
  fetchCart,
  subtractFromCart,
	updateCart,
} from "../../actions/CartActions";
import Cart from "./Cart";

const mSTP = (state, ownProps) => ({
  user: state.session.user,
	cart: state.carts[state.session.user.id],
});

const mDTP = (dispatch) => ({
  fetchCart: (userId) => dispatch(fetchCart(userId)),
  addToCart: (userId, product) => dispatch(addToCart(userId, product)),
  subtractFromCart: (userId, product) => dispatch(subtractFromCart(userId, product)),
	updateCart: (userId, cart) => dispatch(updateCart(userId, cart))
});

export default connect(mSTP, mDTP)(Cart);
