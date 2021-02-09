import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { makeStyles } from '@material-ui/core/styles';
import { columns } from '../../data/data';
import {Container, Card, Checkbox} from '@material-ui/core';
import SortIcon from '@material-ui/icons/ArrowDownward';
import 'react-data-table-component-extensions/dist/index.css';

import { getLists } from '../../apis';

import Loading from './../Loading';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
}));  

const TableShow = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const classes = useStyles();

  useEffect(() => {
    const initLists = async () => {
      const res = await getLists();
      if (res) {        
        setData(res.data);
        setLoading(false);
      }
    };
    initLists();
  }, []);

  const tableData = {
    columns,
    data,
  };

  const isIndeterminate = (indeterminate) => indeterminate;
  const selectableRowsComponentProps = { indeterminate: isIndeterminate };

  return (
    <Container className={classes.root} maxWidth="lg">
      <Card>
        {!loading ? (
          <DataTableExtensions {...tableData}>
            <DataTable
              columns={columns}
              data={data}
              noHeader
              sortIcon={<SortIcon />}
              defaultSortField="id"
              defaultSortAsc={false}
              pagination
              highlightOnHover
              selectableRows
              selectableRowsComponent={Checkbox}
              selectableRowsComponentProps={selectableRowsComponentProps}
            />
          </DataTableExtensions>
        ) : (
          <Loading text="Please run api first" />
        )}
      </Card>
    </Container>
  );
};

export default TableShow;
