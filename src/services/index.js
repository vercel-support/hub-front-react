import getConfig from "next/config";
import axios from "axios";

const { publicRuntimeConfig } = getConfig();
const { API_HOST, API_GEO, GEO_KEY } = publicRuntimeConfig;

export const requestGet = async (route, params = {}) => {
  const response = await axios.get(route, { params });
  return response;
};

export const requestPost = async (route, params = {}) => {
  const response = await axios.post(route, { params });
  return response;
};

export const requestRedirect = async (route, url) => {
  const response = await axios.get(route, { params: { url } });
  return response;
};

export const requestGeocode = async (latitude, longitude) => {
  const { data } = await axios.get(
    `${API_GEO}json?q=${encodeURI(
      `${latitude},${longitude}`
    )}&key=${GEO_KEY}&pretty=1`
  );

  return data.status.code !== 200 ? false : data.results[0];
};
