import {all, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {ActionTypes} from '../constants/index';
import {
  ordersGetSuccess,
  ordersPositionsGetSuccess,
} from "../actions/orders";
import api from '../helpers/api';

export function* getOrdersSaga() {
  try {
    const res = yield  api.get(`order`);
    const data = yield res.json();
    yield put(ordersGetSuccess(data))
  } catch (err) {
    console.error('saga error', err);
  }
}

export function* getOrdersPositionsSaga(params) {
  try {

    const route = `order/${params.payload}`;

    debugger;
    const positions = yield api.get(route).then((response) => response.json());
    //const position = yield response.json();
    yield put(ordersPositionsGetSuccess({
      positions,
      orderId: params.payload
    }))
  } catch (err) {
    console.error('saga error', err);
  }
}

export default function* root() {
  yield all(
    [
      takeEvery(ActionTypes.ORDERS_GET, getOrdersSaga),
      takeEvery(ActionTypes.ORDERS_POSITIONS_GET, getOrdersPositionsSaga)
    ]
  );
}