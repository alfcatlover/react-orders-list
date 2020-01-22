import React, {useMemo} from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import StarBorder from '@material-ui/icons/StarBorder';
import {makeStyles} from '@material-ui/core/styles';

import {TPosition} from '../helpers/types';

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Position({position}) {
  const classes = useStyles();
  const price = useMemo(() => new Intl.NumberFormat('ru-RU').format(position.sum), [position.price]);
  const sum = useMemo(() => new Intl.NumberFormat('ru-RU').format(position.sum), [position.sum]);
  const text = (
    <span><strong>{position.name}</strong> - {position.qty} x ${price} = ${sum}</span>
  );

  return (
    <ListItem className={classes.nested} key={position.id}>
      <ListItemIcon>
        <StarBorder/>
      </ListItemIcon>
      <ListItemText primary={text}/>
    </ListItem>
  )
}

Position.propTypes = {
  position: TPosition,
};

export default Position;