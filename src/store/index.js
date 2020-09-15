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
    productsPerPage: 32,
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
  loadingData: false,
  geoLocationOpen: false
};
const maxStoreDistance = 60000;
const store = createContext(initialState);

const { Provider } = store;

// Saga
function* payments({ paymentCard }) {
  try {
    const { data } = yield call(service.requestPaymentsCard, paymentCard);
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
    const currentStore = yield select(({ myStore }) => myStore);
    const dataStores = yield call(service.requestStores, currentStore.id);
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

function* setSavedStore({ payload }) {
  const savedStore = JSON.parse(localStorage.getItem("myStore"));
  if(savedStore){
    const { data } = yield call(service.requestGetStore, { postalCode: savedStore.address.postalCode });
    const updatedStores = data.filter((store) => store.id !== savedStore.id);
    yield put({ type: "SET_STORE_STATE", payload: { myStore: savedStore, stores: updatedStores } });
  }
}

function* handleGeoError() {
  try{
    const savedStore = JSON.parse(localStorage.getItem("myStore"));
    if(savedStore){
      const { data } = yield call(service.requestGetStore, { postalCode: savedStore.address.postalCode });
      const updatedStores = data.filter((store) => store.id !== savedStore.id);
      console.log(savedStore);
      console.log(updatedStores);
      yield put({ type: "SET_STORE_STATE", payload: { myStore: savedStore, stores: updatedStores } });
    }
    else{
      const userPostalCode = localStorage.getItem("postalcode-delivery");
      let params = { postalCode: '01001-000' };
      if(userPostalCode) params = { postalCode: userPostalCode };
      const { data } = yield call(service.requestGetStore, { params });
      yield put({ type: "UPDATE_STORES", payload: data });
    }

  }
  catch(error){

  }
}

function* getStoresByPostalCode({ payload }) {
    try{
        let postalCode = payload;
        postalCode = postalCode.replace(/\D/g, "");
        let validator = /^[0-9]{8}$/;
        if (validator.test(postalCode)) {
            localStorage.setItem("postalcode-delivery", postalCode);
            const params = { postalCode };
            const { data } = yield call(service.requestGetStore, { params });
            yield put({ type: "UPDATE_STORES", payload: data });

            if(data[0] && data[0].distance < maxStoreDistance){
              const myNewStore = data[0];
              yield put({ type: "CHANGE_STORE", payload: { store: myNewStore } });
              localStorage.setItem("myStore", JSON.stringify(myNewStore));
              try {
                yield put({ type: "CHANGE_STORE_SUCCESS" });
              } catch (error) {
                yield put({ type: "CHANGE_STORE_ERROR" });
              }
            }
        }
    }
    catch(error){
        yield put({ type: "STORES_ERROR" });
    }
}

function* getStores() {
  try {
    const userPostalCode = localStorage.getItem("postalcode-delivery");
    let params

    if(userPostalCode) params = { postalCode: userPostalCode };
    else params = yield select(({ geo }) =>
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
  const userPostalCode = localStorage.getItem("postalcode-delivery");
  let params

  if(userPostalCode) params = { postalCode: userPostalCode }
  else params = yield select(({ geo }) =>
    geo.postalCode
      ? { postalCode: geo.postalCode }
      : { latitude: geo.latitude, longitude: geo.longitude }
  );
  
  if(!params.postalCode || !params.latitude || !params.longitude){
    params = { postalCode: payload.store.address.postalCode }
  }

  const { data } = yield call(service.requestGetStore, { params });
  const updatedStores = data.filter((store) => store.id !== payload.store.id);
  yield put({ type: "UPDATE_STORES", payload: updatedStores });
  localStorage.setItem(
    "myStore",
    JSON.stringify(data.find((st) => st.id === payload.store.id))
  );

  try {
    yield put({ type: "CHANGE_STORE_SUCCESS" });
  } catch (error) {
    yield put({ type: "CHANGE_STORE_ERROR" });
  }
}

function* setMyStore({ payload }) {
  let savedStore = localStorage.getItem("myStore");

  if(savedStore){
    if(savedStore == "undefined") savedStore = null;
    else savedStore = JSON.parse(savedStore);
  }

  if (!savedStore || savedStore.id === "cd") {
    if(payload && payload.length > 0){
      if(payload[0].distance < maxStoreDistance){
        const newStore = JSON.stringify(payload[0]);
        if(newStore !== "undefined"){
          localStorage.setItem("myStore", newStore);
          yield put({ type: "CHANGE_STORE", payload: { store: payload[0] } });
        }
      }
    }
  } else {
    yield put({ type: "CHANGE_STORE", payload: { store: savedStore } });
  }
}

function* changePostalCode({ payload }) {

  let savedStore = localStorage.getItem("myStore");
  if (savedStore) savedStore = JSON.parse(savedStore);

  const params = { postalCode: payload };
  const { data } = yield call(service.requestGetStore, { params });
  let myNewStore;
  if(data && data.length > 0){
    if(!savedStore){  
      if(data[0].distance < maxStoreDistance){
        myNewStore = data[0];
      }     
    }
    else{
      myNewStore = savedStore;
    }
    if(myNewStore){
      yield put({ type: "UPDATE_STORES", payload: data });
      yield put({ type: "CHANGE_STORE", payload: { store: myNewStore } });
      localStorage.setItem("myStore", JSON.stringify(myNewStore));
      try {
        yield put({ type: "CHANGE_STORE_SUCCESS" });
      } catch (error) {
        yield put({ type: "CHANGE_STORE_ERROR" });
      }
    }
  }
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

function* watchGetPostcodeError() {
  yield takeEvery("GEO_ERROR", handleGeoError);
}

function* watchChangeStore() {
  yield takeEvery("CHANGE_STORE", changeStore);
}

function* watchPostalCode() {
  yield takeEvery("CHANGE_POSTALCODE", changePostalCode);
}

function* watchSavedStore() {
  yield takeEvery("SET_SAVED_STORE", setSavedStore);
}

function* watchStores() {
  yield takeEvery("STORES_SUCCESS", setMyStore);
}

function* watchSearchByPostalCode() {
  yield takeEvery("SEARCH_BY_POSTAL_CODE", getStoresByPostalCode)
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
    watchStores(),
    watchGetPostcodeError(),
    watchSavedStore(),
    watchSearchByPostalCode()
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
        case "SEARCH_BY_POSTAL_CODE":
          return {
            ...state,
            postalCode: action.payload.postalCode
          }
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
        case "UPDATE_SAVED_STORE":
          return {
            ...state,
            myStore: { ...action.payload.myStore },
            stores: { ...action.payload.stores }
          };
        case "CHANGE_STORE":
          const newMyStore = state.stores.filter(
            (store) => store.id === action.payload.store.id
          )[0];
          const newStores = state.stores.filter(
            (store) => store.id !== action.payload.store.id
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

        case "SET_STORE_STATE":
          return {
            ...state,
            myStore: action.payload.myStore,
            stores: action.payload.stores
          };
        
        case "LOADING_DATA":
          return {
            ...state, loadingData: action.payload
          }

        case "SET_GEOLOCATION_OPEN":
          return {
            ...state, geoLocationOpen: action.payload
          }

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
