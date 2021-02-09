import React from 'react';
import Button from '@material-ui/core/Button';

import { removeItem } from '../../utils/useData';

const Delete = (props) => {
  const onDelete = (e) => {
    e.preventDefault();
    console.log(props.row.id);
    // items.removeItem(e.target.name);
  };

  return (
    <Button variant="contained" color="secondary" onClick={onDelete}>
      Delete
    </Button>
  );
};

export default Delete;
