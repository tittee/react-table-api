import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { makeStyles } from '@material-ui/core/styles';
import { columns } from '../../data/data';
import { Container, Card } from '@material-ui/core';
import SortIcon from '@material-ui/icons/ArrowDownward';
import 'react-data-table-component-extensions/dist/index.css';

import { useDispatch, useSelector } from 'react-redux'; 

import { getLists } from '../../apis';
import { setLastId } from './../../redux/data';

import Loading from './../Loading';
import DateFormat from './../DateFormat';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
}));

const TableShow = () => {
  const dispatch = useDispatch();
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    const initLists = async () => {
      const res = await getLists();
      if (res) {
        setData(res.data);
        setLoading(false);
        dispatch(setLastId(res.data.length));
      }
    };
    initLists();
  }, []);

  const tableData = {
    columns,
    data,
  };


  return (
    <Container className={classes.root} maxWidth="lg">
      <Card>
        {!loading ? (
          <>
            <DateFormat />
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
              />
            </DataTableExtensions>
          </>
        ) : (
          <Loading text="Please run api first" />
        )}
      </Card>
    </Container>
  );
};

export default TableShow;
