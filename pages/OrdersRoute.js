import React, {useEffect, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';

import {ordersGet, ordersPositionsGet} from '../actions/orders';
import Header from '../components/Header';
import Order from '../components/Order';
import NullState from '../components/NullState';

const useStyles = makeStyles(theme => ({
  wrap: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
  },
  spinner: {
    padding: '30px',
  },
  list: {
    width: '100%',
  }
}));

function OrdersRoute() {
  const [filter, setFilter] = useState('');

  const orders = useSelector(state => state.orders.payload);
  const positions = useSelector(state => state.orders.positions);
  const loading = useSelector(state => state.orders.loading);
  const dispatch = useDispatch();

  const fetchOrders = useCallback((filterStr) => dispatch(ordersGet(filterStr)), []);
  const fetchOrderPositions = useCallback((orderId) => dispatch(ordersPositionsGet(orderId)), []);

  const classes = useStyles();

  useEffect(fetchOrders, []);

  return (
    <>
      <Header title={'Order List'}
              filter={filter}
              onSearch={(event) => {
                setFilter(event.target.value);
                fetchOrders(event.target.value);
              }}/>
      <div className={classes.wrap}>
        {loading && <div className={classes.spinner}><CircularProgress color="secondary"/></div>}
        {!loading && !orders.length && <NullState/>}

        {!loading && orders.length > 0 && <List
          component="div"
          className={classes.list}>
          {orders.map((order) => <Order order={order}
                                        key={order.id}
                                        positions={positions}
                                        onClick={fetchOrderPositions}/>)}
        </List>}
      </div>
    </>
  )
}

export default OrdersRoute;

