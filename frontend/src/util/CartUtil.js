import axios from "axios";

export const fetchCart = (userId) => {
  return axios.get(`/api/carts/${userId}`);
};

export const addToCart = (product) => {
  return axios.patch(`/api/carts/:cartId/add`, product);
};

export const subtractFromCart = (product) => {
  return axios.patch(`/api/carts/:cartId/subtract`, product);
};
