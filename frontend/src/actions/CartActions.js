import * as APIUtil from "../util/CartUtil";

export const RECEIVE_CURRENT_CART = "RECEIVE_CURRENT_CART";
export const RECEIVE_CART_ERRORS = "RECEIVE_CART_ERRORS";

export const receiveCurrentCart = (cart) => ({
  type: RECEIVE_CURRENT_CART,
  cart,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_CART_ERRORS,
  errors,
});

export const fetchCart = (userId) => (dispatch) =>
  APIUtil.fetchCart(userId).then(
    (cart) => dispatch(receiveCurrentCart(cart.data)),
    (err) => dispatch(receiveErrors(err.response.data))
  );

export const addToCart = (product) => (dispatch) =>
  APIUtil.addToCart(product).then(
    (cart) => dispatch(receiveCurrentCart(cart.data)),
    (err) => dispatch(receiveErrors(err.response.data))
  );

export const subtractFromCart = (product) => (dispatch) =>
  APIUtil.fetchCart(product).then(
    (cart) => dispatch(receiveCurrentCart(cart.data)),
    (err) => dispatch(receiveErrors(err.response.data))
  );
