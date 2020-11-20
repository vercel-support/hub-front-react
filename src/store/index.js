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
  defaultStore: {
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
  myStore: null,
  stores: [],
  changedStore: false,
  loadingData: false,
  geoLocationOpen: false,
  cartPageProducts: [],
  userResumeInfo: null,
};
const maxStoreDistance = 60000;
const store = createContext(initialState);

const { Provider } = store;

// Saga
function* handleGeoError() {
  try{
    const savedStore = JSON.parse(localStorage.getItem("myStore"));
    if(savedStore){
      const { data } = yield call(service.requestGetStore, { postalCode: savedStore.address.postalCode });
      const updatedStores = data.filter((store) => store.id !== savedStore.id);

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
  yield put({ type: "LOADING_DATA", payload: true });
  try {
    const params = { postalCode: payload };
    const { data } = yield call(service.requestGetStore, { params });

    let userStore;
    let nearbyStores;

    if(data[0].distance < maxStoreDistance){
      userStore = data[0];
      nearbyStores = data.slice(1, 10);
    }
    else{
      userStore = initialState.defaultStore;
      nearbyStores = data.slice(0, 9);
    }

    localStorage.setItem("myStore", JSON.stringify(userStore))
    localStorage.setItem("nearby-stores", JSON.stringify(nearbyStores));

    yield put({ type: "SET_STORE_STATE", payload: { myStore: userStore, stores: nearbyStores } });
    yield put({ type: "LOADING_DATA", payload: false });

  } catch (error) {
    yield put({ type: "STORES_ERROR" });
    yield put({ type: "LOADING_DATA", payload: false });
  }
}

function* getStoresByGeolocation() {
  try {
    const params = yield select(({ geo }) =>
      geo.postalCode
        ? { postalCode: geo.postalCode }
        : { latitude: geo.latitude, longitude: geo.longitude }
    );

    const { data } = yield call(service.requestGetStore, { params });

    let userStore;
    let nearbyStores;

    if(data[0].distance < maxStoreDistance){
      userStore = data[0];
      nearbyStores = data.slice(1, 10);
    }
    else{
      userStore = initialState.defaultStore;
      nearbyStores = data.slice(0, 9);
    }

    localStorage.setItem("myStore", JSON.stringify(userStore))
    localStorage.setItem("nearby-stores", JSON.stringify(nearbyStores));

    yield put({ type: "SET_STORE_STATE", payload: { myStore: userStore, stores: nearbyStores } });

  } catch (error) {
    yield put({ type: "STORES_ERROR" });
  }
}

function* changeStore({ payload }) {
  const currentStore = JSON.parse(localStorage.getItem("myStore"));
  localStorage.setItem("myStore", JSON.stringify(payload.store));
  const savedStores = JSON.parse(localStorage.getItem("nearby-stores") || "[]");
  let newStores = [currentStore].concat(savedStores.filter(store => store.id !== payload.store.id));
  localStorage.setItem("nearby-stores", JSON.stringify(newStores));

  yield put({ type: "SET_STORE_STATE", payload: { myStore: payload.store, stores: newStores } });
}

function* setNewStore({ payload }) {
  localStorage.setItem("myStore", JSON.stringify(payload.store));
  const savedStores = JSON.parse(localStorage.getItem("nearby-stores") || "[]");
  let newStores = savedStores.filter(store => store.id !== payload.store.id);
  yield put({ type: "SET_STORE_STATE", payload: { myStore: payload.store, stores: newStores } });
}

function* setCdStore() {
  localStorage.setItem("myStore", JSON.stringify(initialState.defaultStore));
  yield put({ type: "SET_STORE_STATE", payload: { myStore: initialState.defaultStore, stores: [] } });
}

function* watchGetPostcode() {
  yield takeEvery("GEO_SUCCESS", getStoresByGeolocation);
}

function* watchGetPostcodeError() {
  yield takeEvery("GEO_ERROR", handleGeoError);
}

function* watchPostalCode() {
  yield takeEvery("POSTALCODE_SUCCESS", getStoresByPostalCode);
}

function* watchChangeStore() {
  yield takeEvery("CHANGE_STORE", changeStore);
}

function* watchSetNewStore() {
  yield takeEvery("SET_NEW_STORE", setNewStore);
}

function* watchSetCdStore() {
  yield takeEvery("SET_CD_STORE", setCdStore);
}

function* rootSaga() {
  yield all([
    watchGetPostcode(),
    watchChangeStore(),
    watchPostalCode(),
    watchGetPostcodeError(),
    watchSetNewStore(),
    watchSetCdStore(),
  ]);
}
// Saga

// Reducer/Provider
const StateProvider = ({ children, value }) => {
  const [state, dispatch] = useReducerAndSaga(
    (state, action) => {
      switch (action.type) {
        case "CHANGE_POSTALCODE":
          return {
            ...state,
            geo: { ...state.geo, postalCode: action.payload },
          };
        case "POSTALCODE_SUCCESS":
          return {
            ...state,
            geo: { ...state.geo, postalCode: action.payload, error: false },
          };
        case "GEO_ERROR":
          return { ...state,  geo: { ...state.geo, error: true } };
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
        case "CHANGE_STORE":
          return {
            ...state,
            myStore: action.payload.store
          };
        case "SET_NEW_STORE":
          return {
            ...state,
          }
        case "SET_CD_STORE":
          return {
            ...state,
          }
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
        case "SET_CART_PAGE_PRODUCTS":
          return {
            ...state, cartPageProducts: action.payload
          }
        case "SET_USER_RESUME_INFO":
          return {
            ...state, userResumeInfo: action.payload
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
