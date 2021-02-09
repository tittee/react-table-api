import React from 'react';
import { formatDateTime } from './../utils/Utility';
import Edit from './../components/Edit';
import Delete from './../components/Delete';;

export const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Description',
    selector: 'description',
    sortable: true,
    format: (d) => `${d.description.slice(0, 100)}...`,
  },
  {
    name: 'Create Date',
    selector: 'createdAt',
    sortable: true,
    cell: (d) => <span>{formatDateTime(d.createdAt)}</span>,
  },
  {
    name: 'Update Date',
    selector: 'updatedAt',
    cell: (d) => <span>{formatDateTime(d.updatedAt)}</span>,
  },
  {
    name: 'Edit',
    button: true,
    cell: (row) => <Edit row={row} />,
  },
  {
    name: 'Delete',
    button: true,
    cell: (row) => <Delete row={row} />,
  },
];
