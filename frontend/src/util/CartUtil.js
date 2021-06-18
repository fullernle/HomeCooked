import axios from "axios";

export const fetchCart = (userId) => {
  return axios.get(`/api/carts/${userId}`);
};

export const createCart = (userId) => {
  return axios.post(`/api/carts/${userId}`);
};

export const addProductToCart = (cartId, product) => {
	return axios.patch(`/api/carts/:cartId/add`, product);
}