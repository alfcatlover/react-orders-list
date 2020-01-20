import React from 'react';
import PropTypes from 'prop-types';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import {makeStyles} from '@material-ui/core/styles';

import {TOrder} from '../helpers/types';

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Order({order, positions, ...restProps}) {
  const classes = useStyles();

  return (
    <>
      <ListItem button onClick={() => restProps.onClick(order.id)}>
        <ListItemIcon>
          <InboxIcon/>
        </ListItemIcon>
        <ListItemText primary={`${order.docNum}, ${order.docDate}, ${order.description}`}/>
        {order.isOpen ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={order.isOpen} timeout='auto' unmountOnExit>
        <List component="div" disablePadding>
          {positions.map((position) =>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder/>
              </ListItemIcon>
              <ListItemText primary={`${position.id}, ${position.name}, ${position.qty}`}/>
            </ListItem>
          )}
        </List>
      </Collapse>
    </>
  )
}

Order.propTypes = {
  order: TOrder,
  positions: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Order;