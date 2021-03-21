import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #f44336 30%, #f44336 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 36,
    padding: '0 20px',
  },
});

export default function ButtonMenu({onClick}) {
  const classes = useStyles();
  return <Button onClick={onClick} className={classes.root}>Logout</Button>;
}