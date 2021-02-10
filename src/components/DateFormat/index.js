import 'date-fns';
import React , {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import DateFnsUtils from '@date-io/dayjs';
import {
  MuiPickersUtilsProvider,  
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Modal from './../Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function MaterialUIPickers() {
  const classes = useStyles();
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date()); // Default or '2020-08-18T21:11:54'
  const [open, setOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const onAdd = () => {
    setOpen(true);    
  };

  const onClose = () => {
    setOpen(false);    
  };
  
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="center" alignItems="center">
          <div className={classes.root}>
            <Button variant="contained" style={{ height: 'max-content' }} onClick={onAdd}>
              Add New
            </Button>

            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/DD/YYYY"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/DD/YYYY"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
        </div>
      </Grid>
      <Modal open={open} closeModal={onClose} title="Create New"></Modal>
    </MuiPickersUtilsProvider>
  );
}
