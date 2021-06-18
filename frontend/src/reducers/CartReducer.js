import { RECEIVE_CURRENT_CART } from "../actions/CartActions";

export default function (state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_CART:
			let cart = action.cart 
			newState[cart._id] = cart;
      return newState;

    default:
      return state;
  }
}
