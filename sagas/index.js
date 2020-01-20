import {all, fork} from 'redux-saga/effects';

import orders from './orders';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(orders)
  ]);
}
