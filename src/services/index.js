import axios from "axios";

export const get = async (route, params = {}) => {
  const response = await axios.get(route, { params });
  return response;
};
