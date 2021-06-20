import axios from "axios";

export const fetchCart = (userId) => {
  return axios.get(`/api/carts/${userId}`);
};

export const addToCart = (userId, product) => {
  return axios.patch(`/api/carts/${userId}/add`, product);
};

export const subtractFromCart = (userId, product) => {
  return axios.patch(`/api/carts/${userId}/subtract`, product);
};

export const updateCart = (userId, cart) => {
  return axios.patch(`/api/carts/${userId}`, cart);
};
