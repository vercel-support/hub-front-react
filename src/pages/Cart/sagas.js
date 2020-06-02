import { call, cps, delay, put, takeLatest } from 'redux-saga/effects';
import { fetchCartData, fetchShippingData } from './api';
import {
  REQUEST_API_CART_DATA,
  REQUEST_API_SHIPPING_DATA,
  cartActions
} from './actions';

function* getApiCartData(action) {
  try {
    const response = yield call(fetchCartData, action.reqBody);
    yield put({type: "RECEIVE_API_SHIPPING_DATA", response});
  } catch (e) {
    yield put(cartActions.setFetchCartDataError(e));
  }
}

function* getApiShippingData(action) {
  try {
    let response = yield* fetchShippingData(action.reqBody);
    yield delay(10000)
    console.log(response)
    yield put(cartActions.receiveApiShippingData(response));
  } catch (e) {
    yield put(cartActions.setFetchShippingDataError(e.message));
  }
}

export default function* sagaCart() {
  yield takeLatest(REQUEST_API_CART_DATA, getApiCartData);
  yield takeLatest(REQUEST_API_SHIPPING_DATA, getApiShippingData);
}
