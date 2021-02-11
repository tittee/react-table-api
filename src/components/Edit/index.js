import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FromControl from '../FromControl';
import { setCloseModal } from './../../redux/data';
import { useDispatch } from 'react-redux';

const Edit = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const onCloseModal = () => {
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
      <FromControl
        title="Edit"
        open={open}
        closeModal={onCloseModal}
        item={props.row}
      />
    </>
  );
};

export default Edit;
