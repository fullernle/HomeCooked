import { connect } from "react-redux";
import { addToCart } from "../../actions/CartActions";
import Product from "./Product"
import { openModal } from "../../actions/ModalActions";


const mSTP = (state, ownProps) => ({
	session: state.session
});

const mDTP = (dispatch) => ({
	addToCart: (cartId, product) => dispatch(addToCart(cartId, product)),
	openModal: (modal) => dispatch(openModal(modal))
});



export default connect(mSTP, mDTP)(Product);