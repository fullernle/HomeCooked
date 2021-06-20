import axios from "axios";

export const fetchCart = (userId) => {
  return axios.get(`/api/carts/${userId}`);
};

export const addToCart = (cartId, product) => {
  return axios.patch(`/api/carts/${cartId}/add`, product);
};

export const subtractFromCart = (cartId, product) => {
  return axios.patch(`/api/carts/${cartId}/subtract`, product);
};
