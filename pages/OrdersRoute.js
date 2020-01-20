import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import {ordersGet, ordersPositionsGet} from '../actions/orders';
import Order from '../components/Order';
import Page from '../components/Page';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}));

function OrdersRoute() {
  useEffect(() => {
    dispatch(ordersGet());
  }, []);

  const orders = useSelector(state => state.orders.payload);
  const positions = useSelector(state => state.orders.positions);
  const loading = useSelector(state => state.orders.loading);
  const dispatch = useDispatch();

  const fetchOrderPositions = useCallback((orderId) => dispatch(ordersPositionsGet(orderId)), []);

  const classes = useStyles();

  const showPositions = (orderId) => {
    fetchOrderPositions(orderId);
  };

  return (
    <Page title="Orders Page">

      {loading && <div>Loading...</div>}
      {!loading && !orders.length && <div>No data</div>}

      {!loading && orders.length > 0 && <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}>
        {orders.map((order) => <Order order={order}
                                      key={order.id}
                                      positions={positions}
                                      onClick={showPositions}/>)}
      </List>}
    </Page>
  )
}

export default OrdersRoute;

