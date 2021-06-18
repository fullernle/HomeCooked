import {
  RECEIVE_CART_ERRORS,
  RECEIVE_CURRENT_CART,
} from "../actions/CartActions";

const _nullErrors = [];

const CartErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_CART:
      return _nullErrors;

    case RECEIVE_CART_ERRORS:
      return action.errors;

    default:
      return state;
  }
};

export default CartErrorsReducer;
