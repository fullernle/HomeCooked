import {
  getBusinesses,
  createBusiness,
} from "../util/business_api_util";

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_NEW_BUSINESS = "RECEIVE_NEW_BUSINESS";

export const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses,
});

export const receiveNewBusiness = (business) => ({
  type: RECEIVE_NEW_BUSINESS,
  business,
});

export const fetchBusinesses = () => (dispatch) =>
  getBusinesses()
    .then((businesses) => dispatch(receiveBusinesses(businesses)))
    .catch((err) => console.log(err));

export const initBusiness = (data) => (dispatch) =>
  createBusiness(data)
    .then((business) => dispatch(receiveNewBusiness(business)))
    .catch((err) => console.log(err));
