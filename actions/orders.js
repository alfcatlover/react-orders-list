import {createActions} from 'redux-actions';

import {ActionTypes} from '../constants/index';

export const {
  ordersGet,
  ordersGetSuccess,
  ordersPositionsGet,
  ordersPositionsGetSuccess
} = createActions({
  [ActionTypes.ORDERS_GET]: (payload) => payload,
  [ActionTypes.ORDERS_GET_SUCCESS]: (payload) => payload,
  [ActionTypes.ORDERS_POSITIONS_GET]: (payload) => payload,
  [ActionTypes.ORDERS_POSITIONS_GET_SUCCESS]: (payload) => payload,
});