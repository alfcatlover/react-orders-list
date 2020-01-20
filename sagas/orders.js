import {all, put, takeEvery} from 'redux-saga/effects';

import {ActionTypes} from '../constants/index';
import {
  ordersGetSuccess,
  ordersPositionsGetSuccess,
} from '../actions/orders';
import api from '../helpers/api';

export function* getOrdersSaga(params) {
  console.log('a,b', params)
  try {
    const orders = yield  api.get(`order`, params.payload && {
      filter: params.payload
    })
      .then((response) => response.json());
    yield put(ordersGetSuccess(orders))
  } catch (err) {
    console.error('saga error', err);
  }
}

export function* getOrdersPositionsSaga(params) {
  try {
    const route = `order/${params.payload}`;
    const positions = yield api.get(route)
      .then((response) => response.json());
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