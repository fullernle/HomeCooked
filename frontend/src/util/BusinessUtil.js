import axios from "axios";

export const fetchBusiness = (businessId) => {
  return axios.get(`/api/businesses/${businessId}`);
};

export const fetchBusinesses = () => {
  return axios.get(`/api/businesses/`);
};

export const createBusiness = (data) => {
  return axios.post("/api/businesses/");
};
