import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useFormik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import { createList, editList } from '../../apis';
import { useDispatch, useSelector } from 'react-redux';
import { setCloseModal, setLastId } from '../../redux/data';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.description) {
    errors.description = 'Required';
  }

  return errors;
};

function getModalStyle() {
  const top = 50 + rand();
  // const left = 50 + rand();

  return {
    top: `${top}%`,
    left: '0',
    right: '0',
    transform: `translate(-0%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 550,
    margin: '0 auto',
  },
  button: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
}));

const FormHandle = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const formik = useFormik({
    initialValues: {
      title: item && item.title ? item.title : '',
      description: item && item.description ? item.description : '',
    },
    validate,
    onSubmit: async (values) => {
      setClose(close);
      if (!item) {
        await createList(values);
      } else {
        await editList(item.id, values);
      }
    },
  });

  return (
    <div
      style={modalStyle}
      className={`${classes.paper} bg-white w-auto border-none rounded-lg p-10`}
    >
      <div>
        <h1 className="font-bold text-blue-900 text-center text-4xl mb-5">
          {title}
        </h1>
        <form className="flex flex-wrap" onSubmit={formik.handleSubmit}>
          <div className="flex flex-nowrap items-center w-full mb-3">
            <label htmlFor="title" className="block w-1/4">
              Title :
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formik.values.title}
              placeholder="Please enter title"
              className="ml-3 py-1 px-3 border border-gray-300 rounded-lg w-3/4"
              onChange={formik.handleChange}
            />
            {formik.errors.title && formik.touched.title ? (
              <div>{formik.errors.title}</div>
            ) : null}
          </div>
          <div className="flex flex-nowrap items-center w-full mb-3">
            <label htmlFor="description" className="block w-1/4">
              Description :
            </label>
            <input
              id="description"
              name="description"
              type="text"
              value={formik.values.description}
              placeholder="Please enter description"
              className="ml-3 py-1 px-3 border border-gray-300 rounded-lg w-3/4"
              onChange={formik.handleChange}
            />
            {formik.errors.description && formik.touched.description ? (
              <div>{formik.errors.description}</div>
            ) : null}
          </div>
          <div className="flex-none w-full flex justify-center mt-6">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormHandle;
