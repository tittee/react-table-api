import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useFormik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import { createList, editList } from './../../apis';
import { useDispatch, useSelector } from 'react-redux';
import { setCloseModal } from './../../redux/data';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const validate = values => {
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

const FromControl = ({ title, open, closeModal, item }) => {
  const dispatch = useDispatch();
  
  const isClose = useSelector((state) => state.data.isClose);
  const lastId = useSelector((state) => state.data.lastId);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [close, setClose] = useState(false);

  const fireModal = () => {
    dispatch(setCloseModal(true));
  };

  const formik = useFormik({
    initialValues: {
      title: item && item.title ? item.title : '',
      description: item && item.description ? item.description : '',
    },
    validate,
    onSubmit: async (values) => {
      if ( !item ) {
        const r = await createList({ ...values, lastId });
        if (r.data) {
          dispatch(setCloseModal(true));
        }
      } else {
        const r = await editList(item.id , values);
        if (r.data) {
          dispatch(setCloseModal(true));
        }
      }
    },
  });

  const body = (
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

  // const { data, toggleCleared } = this.state;

  // state = { selectedRows: [], toggleCleared: false, data: tableDataItems };

  // handleChange = state => {
  //   this.setState({ selectedRows: state.selectedRows });
  // };

  // handleRowClicked = row => {

  //   console.log(`${row.name} was clicked!`);
  // }

  // deleteAll = () => {
  //   const { selectedRows } = this.state;
  //   const rows = selectedRows.map(r => r.name);

  //   if (window.confirm(`Are you sure you want to delete:\r ${rows}?`)) {
  //     this.setState(state => ({ toggleCleared: !state.toggleCleared, data: differenceBy(state.data, state.selectedRows, 'name') }));
  //   }
  // }

  // deleteOne = row => {

  //   if (window.confirm(`Are you sure you want to delete:\r ${row.name}?`)) {
  //     const { data } = this.state;
  //     const index = data.findIndex(r => r === row);

  //     this.setState(state => ({
  //       toggleCleared: !state.toggleCleared,
  //       data: [...state.data.slice(0, index), ...state.data.slice(index + 1)],
  //     }));
  //   }
  // }

  return (
    <div>
      <Modal
        open={open}
        onClose={fireModal}
        disableEscapeKeyDown
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default FromControl;
