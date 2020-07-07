import React, { createContext, useReducer } from "react";
import { useReducerAndSaga } from "./useReducerAndSaga";
import { put, delay, all, takeEvery, call } from "redux-saga/effects";
import * as service from "../services";

const initialState = {
  geo: {
    available: null,
    enabled: null,
    timeout: null,
    latitude: null,
    longitude: null,
    postcode: null,
    error: false,
  },
};

const store = createContext(initialState);

const { Provider } = store;

// Saga
function* helloSaga() {
  console.log("Hello Sagas!");
}

function* getPostcode() {
  yield put({ type: "INCREMENT" });
}

function* watchGetPostcode() {
  yield takeEvery("GEO_REQUEST", getPostcode);
}

function* rootSaga() {
  yield all([helloSaga(), watchGetPostcode()]);
}
// Saga

const StateProvider = ({ children, value }) => {
  const [state, dispatch] = useReducerAndSaga(
    (state, action) => {
      switch (action.type) {
        case "GEO_REQUEST":
          return { ...state, geo: { ...action.payload } };
        case "GEO_ERROR":
          return { ...state, geo: { ...initialState.geo, error: true } };
        case "GEO_SUCCESS":
          return { ...state, geo: { ...action.payload } };
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
