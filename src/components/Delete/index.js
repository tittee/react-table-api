import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import Modal from './../Modal';
// import { removeItem } from '../../utils/useData';

const Delete = (props) => {
  const [open, setOpen] = useState(false);

  const onDelete = () => {
    setOpen(true);
    // items.removeItem(e.target.name);
  };

  const onClose = () => {
    setOpen(false);
    // items.removeItem(e.target.name);
  };

  return (
    <>
      <Button variant="contained" color="secondary" onClick={onDelete}>
        DELETE
      </Button>
      <Modal open={open} closeModal={onClose} />
    </>
  );
};

export default Delete;
