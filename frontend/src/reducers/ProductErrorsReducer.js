import {
  RECEIVE_CURRENT_PRODUCT,
  RECEIVE_PRODUCT_ERRORS,
  RECEIVE_PRODUCTS,
} from "../actions/ProductActions";

const _nullErrors = [];

const ProductErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch (actionl.type) {
    case RECEIVE_PRODUCTS:
      return _nullErrors;
		case RECEIVE_CURRENT_PRODUCT:
			return _nullErrors;
		case RECEIVE_PRODUCT_ERRORS:
			return action.errors;
		default:
			return state;
  }
};

export default ProductErrorsReducer