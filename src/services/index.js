import getConfig from "next/config";
import axios from "axios";

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const requestCategoriesPagePath = async() => {
  let page = 0;
  let per_page = 10;
  let paths = [];
  let curr_paths = [];
  do {
    try{
      const url = `${API_URL}/catalogs/categories/paths?page=${page}&perpage=${per_page}`;
      const response = await axios.get(url);
      curr_paths = response.data.data;
      curr_paths.map(p => {
        paths.push(p);
      })
      page += per_page;
    }
    catch(error){
      console.log(error.response || error.message);
    }
  } while(curr_paths && curr_paths.length > 0 && page < 10);
  return paths;
}

export const requestProductsPagePath = async() => {
  let page = 0;
  let per_page = 100;
  let paths = [];
  let curr_paths = [];
  do {
    try{
      const url = `${API_URL}/catalogs/products/paths?page=${page}&perpage=${per_page}`;
      const response = await axios.get(url);
      curr_paths = response.data.data;
      curr_paths.map(p => {
        paths.push(p);
      })
      page += per_page;
    }
    catch(error){
      console.log(error.response || error.message);
    }
  } while(curr_paths && curr_paths.length > 0 && page < 100);
  return paths;
}

export const requestCart = async (params = {}) => {
  const response = await axios.post(`${API_URL}/cart`, {
    ...params,
  });
  return response;
};

export const requestStores = async (params) => {
  const response = await axios.get(
    `${API_URL}/logistic/store?storeId=${params}`
  );
  return response;
};

export const requestShipping = async (params = {}) => {
  const response = await axios.post(
    `${API_URL}/logistic/shipping`,
    { ...params }
  );
  return response;
};

export const requestProduct = async(url) => {
  const response = await axios.get(
    `${API_URL}/catalogs/products?url=${url}`
  );
  return response;
};

export const requestCategories = async () => {
  const response = await axios.get(
    `${API_URL}/catalogs/categories`
  );
  return response;
};

export const requestGetStore = async (params = {}) => {
  const response = await axios.get(`${API_URL}/logistic/stores`, { ...params });
  return response;
};

export const requestRedirect = async (url) => {
  try{
    const response = await axios.get(
      `${API_URL}/catalogs/redirect`,
      {
        params: { url },
      }
    );
    return response;
  }
  catch(error){
    console.log(error.response);
    return null;
  }

};

export const requestSearch = async (param = {}) => {
  const response = await axios.get(
    `${API_URL}/catalogs/products/search?text=${param.query}`
  );
  return response;
};

export const requestEmail = async (email) => {
  const response = await axios.post(
    `${API_URL}/customers/isEmailAvailable`,
    {
      email: email,
    }
  );
  return response;
};

export const requestLogin = async (login) => {
  const response = await axios.post(
    `${API_URL}/customers/login`,
    login
  );
  return response;
};

export const requestRegister = async (register) => {
  const response = await axios.post(
    `${API_URL}/customers/register`,
    register
  );
  return response;
};

export const requestAddresses = async (token) => {
  const response = await axios.get(
    `${API_URL}/customers/addresses?token=${token}`
  );
  return response;
};

export const requestNewAddress = async (newAddress) => {
  const response = await axios.post(
    `${API_URL}/customers/addresses/new`,
    newAddress
  );
  return response;
};

export const requestPaymentsCard = async (paymentCard) => {
  const response = await axios.post(
    `${API_URL}/payments/card`,
    paymentCard
  );
  return response;
};

export const requestProducts = async (
  url = "",
  page = 0,
  storeId = "",
  params = []
) => {
  const {
    data: {
      data: { products, currentPage },
    },
  } = await axios.get(
    `${API_URL}/catalogs/redirect?url=${url}${
      storeId ? `&storeId=${storeId}` : ""
    }&page=${page}&perPage=32${
      params.length ? `&filters=${params.join(",")}` : ""
    }`
  );
  return { products, currentPage };
};
