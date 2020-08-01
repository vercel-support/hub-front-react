import getConfig from "next/config";
import axios from "axios";

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const requestCart = async () => {
  const response = await axios.get(`${API_URL}/cart/cartproduct`);
  return response;
};

export const requestCategories = async () => {
  const response = await axios.get(`${API_URL}/catalogs/categories`);
  return response;
};

export const requestGetStore = async (params = {}) => {
  const response = await axios.get(`${API_URL}/logistic/stores`, { ...params });
  return response;
};

export const requestRedirect = async (url) => {
  const response = await axios.get(`${API_URL}/catalogs/redirect`, {
    params: { url },
  });
  return response;
};
