import * as APIUtil from "../util/ProductUtil";

export const RECEIVE_CURRENT_PRODUCT = "RECEIVE_CURRENT_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

export const receiveCurrentProduct = (product) => ({
  type: RECEIVE_CURRENT_PRODUCT,
  product,
});

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors,
});

export const fetchProduct = (productId) => (dispatch) =>
  APIUtil.fetchProduct(productId).then(
    (data) => dispatch(receiveCurrentProduct(data)),
    (err) => dispatch(receiveErrors(err.response.data))
  );

export const fetchProducts = () => (dispatch) =>
  APIUtil.fetchProducts().then(
    (data) => dispatch(receiveProducts(data)),
    (err) => dispatch(receiveErrors(err))
  );
