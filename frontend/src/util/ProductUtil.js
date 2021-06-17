import axios from "axios";

export const fetchProduct = (productId) => {
  return axios.get(`/api/products/${productId}`);
};

export const fetchProducts = () => {
  return axios.get(`/api/products`);
};
