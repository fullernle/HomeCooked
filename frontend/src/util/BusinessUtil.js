import axios from "axios";

export const fetchBusiness = (businessId) => {
	return axios.get(`/api/businesses/${businessId}`);
}

export const fetchBusinesses = () => {
	return axios.get(`/api/businesses/`);
}