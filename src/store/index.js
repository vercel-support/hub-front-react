import React, { createContext, useReducer } from "react";
import { useReducerAndSaga } from "./useReducerAndSaga";
import { put, all, takeEvery, call, select, take } from "redux-saga/effects";
import * as service from "../services";

const initialState = {
  category: {
    action: "filter", // filter OR sort
    currentPage: 0,
    loading: false,
    products: [],
    productsPerPage: 16,
    sortedBy: "Nome do produto",
  },
  user: {
    address: false,
  },
  login: {
    isEmailAvailable: false,
    onLogin: false,
  },
  productCard: false,
  storesCart: false,
  shippingCart: false,
  geo: {
    available: null,
    enabled: null,
    timeout: null,
    latitude: null,
    longitude: null,
    postalCode: null,
    error: false,
  },
  myStore: {
    id: "cd",
    name: "Centro de distribuição",
    phone: "",
    address: {
      postalCode: "",
      street: "",
      state: "",
      complement: "",
      neighborhood: "",
      city: "",
      number: "",
      latitude: null,
      longitude: null,
    },
    distance: "",
  },
  stores: [],
  changedStore: false,
};

const store = createContext(initialState);

const { Provider } = store;

// Saga
function* payments({ paymentCard }) {
  try {
    const { data } = yield call(service.requestPaymentsCard, paymentCard);
    console.log(data, "paymentsCard");
  } catch (error) {
    console.log(error);
  }
}

function* newAddress({ newAddress }) {
  try {
    const { data } = yield call(service.requestNewAddress, newAddress);
    yield put({ type: "LOGIN_SUCCESS" });
  } catch (error) {
    console.log(error);
  }
}

function* isLogin({ login, handleNext }) {
  try {
    const { data } = yield call(service.requestLogin, login);
    if (data.status === 200) {
      localStorage.setItem("app-token", data.token);
    }
    const address = yield call(
      service.requestAddresses,
      localStorage.getItem("app-token")
    );
    window.Mercadopago.setPublishableKey(
      "TEST-6ff57941-ef53-460f-b875-80eec81400ac"
    );
    yield put({ type: "LOGIN_SUCCESS", address: address.data.addresses });
    handleNext();
  } catch (error) {
    console.log(error);
  }
}

function* registerUser({ register, handleNext }) {
  try {
    const login = { email: register.email, password: register.password };
    const { data } = yield call(service.requestRegister, register);
    if (data) {
      const isLogin = yield call(service.requestLogin, login);
      if (isLogin.data.status === 200) {
        localStorage.setItem("app-token", isLogin.data.token);
      }
      const address = yield call(
        service.requestAddresses,
        localStorage.getItem("app-token")
      );
      window.Mercadopago.setPublishableKey(
        "TEST-6ff57941-ef53-460f-b875-80eec81400ac"
      );
      yield put({ type: "LOGIN_SUCCESS", address: address.data.addresses });
      handleNext();
    }

    console.log(data, newUser);
  } catch (error) {}
}

function* emailRequest({ email }) {
  try {
    const { data } = yield call(service.requestEmail, email);
    yield put({ type: "EMAIL_SUCCESS", email: data.isAvailable });
  } catch (error) {}
}

function* setCart({ payload }) {
  try {
    const currentStore = yield select(({ myStore }) => myStore );
    const dataStores = yield call(
      service.requestStores,
      currentStore.id
    );
    if (payload) {
      const { data } = yield call(service.requestCart, payload);
      yield put({
        type: "CART_SUCCESS",
        payload: data,
        stores: dataStores.data.data,
      });
    }
  } catch (error) {}
}

function* postShipping({ payload }) {
  try {
    const { data } = yield call(service.requestShipping, payload);
    yield put({ type: "SHIPPING_SUCCESS", shipping: data });
  } catch (error) {}
}

function* getStores() {
  try {
    const params = yield select(({ geo }) =>
      geo.postalCode
        ? { postalCode: geo.postalCode }
        : { latitude: geo.latitude, longitude: geo.longitude }
    );
    const { data } = yield call(service.requestGetStore, { params });
    yield put({ type: "STORES_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "STORES_ERROR" });
  }
}

function* changeStore({ payload }) {
  const params = yield select(({ geo }) =>
    geo.postalCode
      ? { postalCode: geo.postalCode }
      : { latitude: geo.latitude, longitude: geo.longitude }
  );
  const { data } = yield call(service.requestGetStore, { params });
  const updatedStores = data.filter(store => store.id !== payload.id);
  yield put({ type: "UPDATE_STORES", payload: updatedStores });
  localStorage.setItem("myStore", JSON.stringify(data.find(st => st.id === payload.id)));

  try {
    yield put({ type: "CHANGE_STORE_SUCCESS" });
  } catch (error) {
    yield put({ type: "CHANGE_STORE_ERROR" });
  }
}

function* setMyStore({ payload }){
  let savedStore = localStorage.getItem("myStore");
  if(savedStore) savedStore = JSON.parse(savedStore);

  if(!savedStore || savedStore.id === "cd"){
    const newStore = JSON.stringify(payload[0]);
    localStorage.setItem("myStore", newStore);
    yield put({ type: "CHANGE_STORE", payload: { id: payload[0].id } });
  }
  else{
    yield put({ type: "CHANGE_STORE", payload: { id: savedStore.id } });
  }
}

function* changePostalCode() {
  const postal_code = yield select(({ geo }) => geo.postalCode);
  localStorage.setItem("postalcode-delivery", postal_code);
}

function* watchPayments() {
  yield takeEvery("PAYMENTS_REQUEST", payments);
}

function* watchRegisterUser() {
  yield takeEvery("REGISTERUSER_REQUEST", registerUser);
}

function* watchNewAddress() {
  yield takeEvery("NEWADDRESS_REQUEST", newAddress);
}

function* watchIsLogin() {
  yield takeEvery("LOGIN_REQUEST", isLogin);
}

function* watchEmailRequest() {
  yield takeEvery("EMAIL_REQUEST", emailRequest);
}

function* watchPostShipping() {
  yield takeEvery("SHIPPING_REQUEST", postShipping);
}

function* watchSetCart() {
  yield takeEvery("CART_REQUEST", setCart);
}

function* watchGetPostcode() {
  yield takeEvery("GEO_SUCCESS", getStores);
}

function* watchChangeStore() {
  yield takeEvery("CHANGE_STORE", changeStore);
}

function* watchPostalCode() {
  yield takeEvery("CHANGE_POSTALCODE", changePostalCode);
}

function* watchStores() {
  yield takeEvery("STORES_SUCCESS", setMyStore);
}

function* rootSaga() {
  yield all([
    watchGetPostcode(),
    watchChangeStore(),
    watchSetCart(),
    watchPostShipping(),
    watchEmailRequest(),
    watchIsLogin(),
    watchNewAddress(),
    watchRegisterUser(),
    watchPayments(),
    watchPostalCode(),
    watchStores()
  ]);
}
// Saga

// Reducer/Provider
const StateProvider = ({ children, value }) => {
  const [state, dispatch] = useReducerAndSaga(
    (state, action) => {
      switch (action.type) {
        case "PAYMENTS_REQUEST":
          return { ...state };
        case "CHANGE_POSTALCODE":
          return {
            ...state,
            geo: { ...state.geo, postalCode: action.payload },
          };
        case "REGISTERUSER_REQUEST":
          return { ...state };
        case "NEWADDRESS_REQUEST":
          return { ...state };
        case "LOGIN_REQUEST":
          return { ...state };
        case "LOGIN_SUCCESS":
          return { ...state, user: { address: action.address } };
        case "EMAIL_REQUEST":
          return { ...state };
        case "EMAIL_SUCCESS":
          return {
            ...state,
            login: { isEmailAvailable: action.email, onLogin: true },
          };
        case "SHIPPING_SUCCESS":
          return { ...state, shippingCart: { ...action.shipping } };
        case "SHIPPING_REQUEST":
          return { ...state };
        case "CART_SUCCESS":
          return {
            ...state,
            productCard: [{ ...action.payload.data }],
            storesCart: { ...action.stores },
          };
        case "CART_REQUEST":
          return { ...state };
        case "GEO_ERROR":
          return { ...state, geo: { ...state.geo, error: true } };
        case "GEO_SUCCESS":
          return {
            ...state,
            geo: { ...state.geo, ...action.payload, error: false },
          };
        case "STORES_ERROR":
          return {
            ...state,
            stores: [],
          };
        case "STORES_SUCCESS":
          return {
            ...state,
            stores: [...action.payload],
          };
        case "UPDATE_STORES":
          return {
            ...state,
            stores: [...action.payload],
          };
        case "CHANGE_STORE":
          const newMyStore = state.stores.filter(
            (store) => store.id === action.payload.id
          )[0];

          const newStores = state.stores.filter(
            (store) => store.id !== action.payload.id
          );

          return {
            ...state,
            myStore: { ...newMyStore },
            stores: newStores,
          };
        case "CHANGE_STORE_SUCCESS":
          return {
            ...state,
          };
        case "CHANGE_STORE_ERROR":
          return {
            ...state,
          };
        case "CATEGORY_ACTION":
          return {
            ...state,
            category: { ...state.category, action: action.payload },
          };

        case "PRODUCTS_SUCCSS":
          return {
            ...state,
            category: {
              ...state.category,
              products: action.payload,
            },
          };
        default:
          return state;
      }
    },
    { ...initialState },
    rootSaga
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
// Reducer/Provider

export { store, StateProvider };
