import React, { useState } from 'react';

import { KeyboardDatePicker } from '@material-ui/pickers';

const FilterComponent = ({ filterText, onFilter, onClear }) => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default or '2020-08-18T21:11:54'
  const [open, setOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
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

      {/* <TextField
        id="search"
        type="text"
        placeholder="Filter By Name"
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
      />
      <ClearButton type="button" onClick={onClear}>
        X
      </ClearButton> */}
    </>
  );
};

export default FilterComponent;
