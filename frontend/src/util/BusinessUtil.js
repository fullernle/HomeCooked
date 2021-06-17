import axios from "axios";

export const fetchBusiness = (businessId) => {
  return axios.get(`/api/businesses/${businessId}`);
};

export const fetchBusinessProducts = (businessId) => {
  return axios.get(`/api/businesses/${businessId}/products`);
};

export const fetchBusinesses = () => {
  return axios.get(`/api/businesses/`);
};

export const createBusiness = (data) => {
  return axios.post("/api/businesses/");
};
