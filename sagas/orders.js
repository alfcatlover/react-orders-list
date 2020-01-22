import {all, put, takeLatest} from 'redux-saga/effects';

import {ActionTypes} from '../constants/index';
import {
  ordersGetSuccess,
  ordersPositionsGetSuccess,
} from '../actions/orders';
import api from '../helpers/api';

export function* getOrdersSaga({payload}) {
  try {
    const orders = yield api.get(`order`, payload && {
      filter: payload
    }).then((response) => response.json());
    yield put(ordersGetSuccess(orders))
  } catch (err) {
    console.error('saga error', err);
  }
}

export function* getOrdersPositionsSaga({payload}) {
  try {
    const route = `order/${payload}`;
    const positions = yield api.get(route)
      .then((response) => response.json());
    yield put(ordersPositionsGetSuccess({
      positions,
      orderId: payload
    }))
  } catch (err) {
    console.error('saga error', err);
  }
}

export default function* root() {
  yield all(
    [
      takeLatest(ActionTypes.ORDERS_GET, getOrdersSaga),
      takeLatest(ActionTypes.ORDERS_POSITIONS_GET, getOrdersPositionsSaga)
    ]
  );
}