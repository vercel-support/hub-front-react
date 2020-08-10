import getConfig from "next/config";
import axios from "axios";

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const requestCart = async (params = {}) => {
  const response = await axios.post('http://18.229.234.11:3000/api/V2/cart', { ...params });
  return response;
};

export const requestStores = async (params = "5e8e1c6e43a61128433f0eed") => {
  const response = await axios.get(`http://18.229.234.11:3000/api/V2/logistic/store?storeId=${params}`);
  return response;
};

export const requestShipping = async (params = {}) => {
  const response = await axios.post('http://18.229.234.11:3000/api/V2/logistic/shipping', { ...params });
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
