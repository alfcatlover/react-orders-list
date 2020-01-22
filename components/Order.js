import React from 'react';
import PropTypes from 'prop-types';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';

import Position from '../components/Position';
import {TOrder} from '../helpers/types';

function Order({order, positions, onClick}) {

  const text = (
    <span><strong>Заказ: {order.docNum}</strong> | {order.docDate} | {order.description}</span>
  );

  return (
    <div key={order.id}>
      <ListItem button onClick={() => onClick(order.id)}>
        <ListItemIcon>
          <InboxIcon/>
        </ListItemIcon>
        <ListItemText primary={text}/>
        {order.isOpen ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={order.isOpen} timeout='auto' unmountOnExit>
        <List component="div" disablePadding>
          {positions.map((position) => <Position position={position}/>)}
        </List>
      </Collapse>
    </div>
  )
}

Order.propTypes = {
  order: TOrder,
  positions: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Order;