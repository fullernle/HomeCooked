import { connect } from "react-redux";
import {
  addToCart,
  fetchCart,
  subtractFromCart,
} from "../../actions/CartActions";
import Cart from "./Cart";

const mSTP = (state, ownProps) => ({
  cart: state.carts[ownProps.match.params.id],
});

const mDTP = (dispatch) => ({
  fetchCart: (userId) => dispatch(fetchCart(userId)),
  addToCart: (product) => dispatch(addToCart(product)),
  subtractFromCart: (product) => dispatch(subtractFromCart(product)),
});

export default connect(mSTP, mDTP)(Cart);
