import {handleActions} from 'redux-actions';

import {ActionTypes} from '../constants/index';

export const ordersState = {
  payload: [],
  positions: [],
  loading: true,
};

export default {
  orders: handleActions(
    {
      [ActionTypes.ORDERS_GET]: (state) => {
        return {
          ...state,
          loading: true
        }
      },
      [ActionTypes.ORDERS_GET_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          loading: false,
          payload: payload
        }
      },
      [ActionTypes.ORDERS_POSITIONS_GET]: (state, {payload}) => {
        return {
          ...state,
          loadingPositions: true,
          positions: [],
          payload: state.payload.map((order) => ({
            ...order,
            isOpen: order.id === payload
          }))
        }
      },
      [ActionTypes.ORDERS_POSITIONS_GET_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          loadingPositions: false,
          positions: payload.positions
        }
      }
    },
    ordersState,
  ),
};