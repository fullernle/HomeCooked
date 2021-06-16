import axios from "axios";

export const getBusinesses = () => {
  return axios.get("/api/businesses");
};

export const createBusiness = (data) => {
  return axios.post("/api/businesses/", data);
};