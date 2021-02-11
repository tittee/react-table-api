import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FromModal from '../FromModal';
import { useDispatch } from 'react-redux';
import Modal from '@material-ui/core/Modal';

const Edit = (props) => {
  const [open, setOpen] = useState(false);

  const onHandleCloseModal = () => {
    setOpen(false);
  };

  const onEditHandle = () => {
    setOpen(true);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={onEditHandle}>
        Edit
      </Button>
     

      <Modal
        open={open}        
        onBackdropClick={onHandleCloseModal}
        disableEscapeKeyDown
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
         <FromModal
            title="Edit"
            item={props.row}
            onHandleCloseModal={onHandleCloseModal}
          ></FromModal>
      </Modal>
    </>
  );
};

export default Edit;
