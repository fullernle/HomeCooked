import * as APIUtil from "../util/BusinessUtil";
import * as ProductActions from "../actions/ProductActions";

export const RECEIVE_CURRENT_BUSINESS = "RECEIVE_CURRENT_BUSINESS";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS_ERRORS = "RECEIVE_BUSINESS_ERRORS";

export const receiveCurrentBusiness = (business) => ({
  type: RECEIVE_CURRENT_BUSINESS,
  business,
});

export const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_BUSINESS_ERRORS,
  errors,
});

export const fetchBusinesses = () => (dispatch) =>
  APIUtil.fetchBusinesses().then(
    (data) => dispatch(receiveBusinesses(data.data)),
    (err) => dispatch(receiveErrors(err.response.data))
  );
// export const fetchBusinesses = () => (dispatch) =>
//   APIUtil.fetchBusinesses()
//     .then((data) => dispatch(receiveBusinesses(data.data)))
//     .catch((err) => dispatch(receiveErrors(err.response.data)));

export const fetchBusiness = (businessId) => (dispatch) => {
  APIUtil.fetchBusiness(businessId).then(
    (business) => dispatch(receiveCurrentBusiness(business.data)),
    (err) => dispatch(receiveErrors(err.response.data))
  );

  APIUtil.fetchBusinessProducts(businessId).then(
    (products) => dispatch(ProductActions.receiveProducts(products.data)),
    (err) => dispatch(receiveErrors(err.response.data))
  );
};

export const createBusiness = (business) => (dispatch) =>
  APIUtil.createBusiness(business).then(
    (data) => dispatch(receiveCurrentBusiness(data)),
    (err) => dispatch(receiveErrors(err.response.data))
  );
