import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FromControl from '../FromControl';

const Add = (props) => {
  const [open, setOpen] = useState(false);

  const onDelete = () => {
    setOpen(true);
    // items.removeItem(e.target.name);
  };

  const onCloseModal = () => {
    setOpen(false);
    // items.removeItem(e.target.name);
  };

  return (
    <>
      <div className={classes.root}>
        <FromControl title="Delete" open={open} closeModal={onCloseModal} />
      </div>
    </>
  );
};

export default Add;
