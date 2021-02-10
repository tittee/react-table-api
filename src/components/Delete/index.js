import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { deleteList } from './../../apis';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();

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

const Delete = ({ row }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);  
  const [open, setOpen] = useState(false);

  const onDelete = () => {
    setOpen(true);    
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  
  const deleteData = async (e) => {
    e.preventDefault();
    const r = await deleteList(row.id);
  };

  const body = (
    <div
      style={modalStyle}
      className={`${classes.paper} bg-white w-auto border-none rounded-lg p-10`}
    >
      <div>
        <h1 className="font-bold text-blue-900 text-center text-4xl mb-2">
          Delete Form
        </h1>
        <h3 className="font-medium text-blue-900 text-center text-lg mb-5">
          Do you want to delete {row.title}?
        </h3>
        <Formik>
          <Form className="flex flex-wrap">
            <div className="flex-none w-full flex justify-center mt-6">
              <Button
                variant="contained"
                className={classes.button}
                onClick={onCloseModal}
              >
                CANCEL
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={deleteData}
              >
                DELETE
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={onDelete}>
        DELETE
      </Button>    
      <Modal
        open={open}
        onClose={onCloseModal}
        disableEscapeKeyDown
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default Delete;
