import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import DateFnsUtils from '@date-io/dayjs';
import {
  MuiPickersUtilsProvider,  
} from '@material-ui/pickers';
import FromModal from '../FromModal';
import Modal from '@material-ui/core/Modal';

import FilterComponent from "./components/FilterComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function MaterialUIPickers() {
  const classes = useStyles(); 
  const [open, setOpen] = useState(false);

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  // const filteredItems = fakeUsers.filter(
  //   (item) =>
  //     item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  // );

  const onAdd = () => {
    setOpen(true);
  };

  const onHandleCloseModal = () => {
    setOpen(false);
  };

  const onFilter = (e) => {
    setFilterText(e.target.value)
  } 
  
  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText('');
    }
  };
  



  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="center" alignItems="center">
        <div className={classes.root}>
          <Button
            variant="contained"
            style={{ height: 'max-content' }}
            onClick={onAdd}
          >
            Add New
          </Button>

          <FilterComponent onFilter={onFilter} onClear={handleClear} filterText={filterText}></FilterComponent>
        </div>
      </Grid>
      
      <Modal
        open={open}        
        onBackdropClick={onHandleCloseModal}
        disableEscapeKeyDown
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
         <FromModal
            title="Edit"
            item=""
            onHandleCloseModal={onHandleCloseModal}
          ></FromModal>
      </Modal>

    </MuiPickersUtilsProvider>
  );
}
