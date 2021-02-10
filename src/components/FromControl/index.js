import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

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

const FromControl = ({ title, open, closeModal }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [close, setClose] = useState(true);

  const createData = (e) => {
    e.preventDefault();
  };

  const body = (
    <div
      style={modalStyle}
      className={`${classes.paper} bg-white w-auto border-none rounded-lg p-10`}
    >
      <div>
        <h1 className="font-bold text-blue-900 text-center text-4xl mb-5">
          {title}
        </h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className="flex flex-wrap">
            <div className="flex flex-nowrap items-center w-full mb-3">
              <label htmlFor="firstName" className="block w-1/4">
                Title :
              </label>
              <Field
                id="title"
                name="title"
                placeholder="Jane"
                className="ml-3 py-1 px-3 border border-gray-300 rounded-lg w-3/4"
              />
            </div>
            <div className="flex flex-nowrap items-center w-full mb-3">
              <label htmlFor="description" className="block w-1/4">
                Description :
              </label>
              <Field
                id="description"
                name="description"
                placeholder="Doe"
                className="ml-3 py-1 px-3 border border-gray-300 rounded-lg w-3/4"
              />
            </div>
            <div className="flex-none w-full flex justify-center mt-6">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={createData}
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
          </Form>
        </Formik>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
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
