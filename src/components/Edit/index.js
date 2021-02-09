import React from 'react';
import Button from '@material-ui/core/Button';

const Edit = (props) => {
  return (
    <Button variant="contained" color="primary">
      Edit {props.row.id}
    </Button>
  );
};

export default Edit;
