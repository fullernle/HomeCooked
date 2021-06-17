import {
  RECEIVE_CURRENT_PRODUCT,
  RECEIVE_PRODUCTS,
} from "../actions/ProductActions";

export default function (state = {}, action) {
  Object.freeze(state);
	let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
			let products = action.products;
      products.forEach((product) => {
        let id = product._id;
        newState[id] = product;
      });
      return newState;

    case RECEIVE_CURRENT_PRODUCT:
			let product = action.product;
			newState[product._id] = product;
			return newState;

    default:
      return state;
  }
}
