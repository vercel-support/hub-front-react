import React, { createContext, useReducer } from "react";
import { useReducerAndSaga } from "./useReducerAndSaga";
import { put, all, takeEvery, call, select } from "redux-saga/effects";
import * as service from "../services";

const initialState = {
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
    id: "5e8e1c6e43a61128433f0eed",
    name: "Petshop do Reberth",
    phone: "(15) 3591-2542",
    address: {
      postalCode: "04650-140",
      street: "Rua José Neves",
      state: "SP",
      complement: "até 379/380",
      neighborhood: "Vila São Paulo",
      city: "São Paulo",
      number: "364",
      latitude: -23.65914,
      longitude: -46.6761561,
    },
    distance: "109057",
  },
  stores: [],
};

const store = createContext(initialState);

const { Provider } = store;

// Saga
function* getStores() {
  try {
    const params = yield select(({ geo }) =>
      geo.postalCode
        ? { postalCode: geo.postalCode }
        : { latitude: geo.latitude, longitude: geo.longitude }
    );

    const { data } = yield call(service.requestGetStore, { params });
    console.log("retorno stores", data);
    yield put({ type: "STORES_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "STORES_ERROR" });
  }
}

function* watchGetPostcode() {
  yield takeEvery("GEO_SUCCESS", getStores);
}

function* rootSaga() {
  yield all([watchGetPostcode()]);
}
// Saga

const StateProvider = ({ children, value }) => {
  const [state, dispatch] = useReducerAndSaga(
    (state, action) => {
      switch (action.type) {
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
            stores: [action.payload],
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

export { store, StateProvider };
