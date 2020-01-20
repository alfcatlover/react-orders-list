import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles(() => ({
  wrap: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 30
  },
}));

function NullState() {
  const classes = useStyles();

  return [
    <div className={classes.wrap}>
      <WarningIcon/>
      Nothing found
    </div>
  ]
}

export default NullState;