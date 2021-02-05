import React, { useMemo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLists } from '../../apis';

import makeData from './makeData';
import useList from './../hooks/useList';


import { setLists } from '../../redux/lists';

import Table from "./../Table";


const TableShow = () => {
  const lists = useSelector((state) => state.lists.lists);
  // const [data, setData] = useState();
  
  const columns = useMemo(() => [
    {
      Header: "ID",
      accessor: 'id',
    },
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Create Date',
      accessor: 'createdAt',
    },
    {
      Header: 'Update Date',
      accessor: 'updatedAt',
    }
  ]);


  const dispatch = useDispatch();

  useEffect(() => {    
    const initLists = async () => {
      const listsRes = await getLists();
      console.log(listsRes.data);
      if (listsRes) {        
        const lists = listsRes.data;    
        dispatch(setLists(lists));   
      }
    };
    initLists();
  }, []);
  


  return (
    <div className="container mx-auto">
      <Table columns={columns} data={lists} />
    </div>
  );
};

export default TableShow;
