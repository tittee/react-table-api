import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Formik, Field, Form } from 'formik';
import Modal from './../Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Add = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Modal open={open} closeModal={onClose}></Modal>
    </div>
  );
};
export default Add;
