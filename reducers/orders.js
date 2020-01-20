import {handleActions} from 'redux-actions';

import {ActionTypes} from '../constants/index';

export const ordersState = {
  payload: [],
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
        console.log('payload', payload);
        return {
          ...state,
          loading: false,
          tesT: payload,
          payload: state.payload.map((order)=>{
            return {
              ...order,
              isOpen: order.id == payload
            }
          })
        }
      },
      [ActionTypes.ORDERS_POSITIONS_GET_SUCCESS]: (state, {payload}) => {
        console.log('payload', payload);
        return {
          ...state,
          loading: false,
          positions: payload.positions
        }
      }
    },
    ordersState,
  ),
};