import React, { useState } from 'react';
import FromControl from '../FromControl';
import { setCloseModal } from './../../redux/data';
import { useDispatch } from 'react-redux';

const Add = (props) => {
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(setCloseModal(false));
  };

  return (
    <>
      <div className={classes.root}>
        <FromControl title="Create" open={open} closeModal={onCloseModal} />
      </div>
    </>
  );
};

export default Add;
