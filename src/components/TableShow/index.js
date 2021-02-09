import React, { useMemo, useEffect, useCallback, useRef, useState } from 'react';
import { formatDateTime } from './../../utils/Utility';
// import useData from './../hooks/useData';
// import useCustomFetch from './../hooks/useCustomFetch';
import Table from './../Table';
import { useDispatch, useSelector } from 'react-redux';
import { setSlice } from './../../redux/data';
import { getLists } from '../../apis';

const TableShow = () => {
  const dispatch = useDispatch();
  
  // const data = useSelector((state) => state.data.data);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const fetchIdRef = useRef(0);
  
  // const [data, loading] = useCustomFetch();
  useEffect(() => {
    const initLists = async () => {
      const listsRes = await getLists();
      if (listsRes) {
        // const data = listsRes.data;
        dispatch(setData(listsRes.data));
        setLoading(false);
      }
    };
    initLists();
  }, []);
  
  const [data, setData] = useState([]);  
  
  const fetchData = useCallback(({ pageSize, pageIndex }) => {   

      
      // Give this fetch an ID
      const fetchId = ++fetchIdRef.current;

      // Set the loading state
      // setLoading(true);

      // We'll even set a delay to simulate a server here
      setTimeout(() => {
        // Only update the data if this is the latest fetch
        if (fetchId === fetchIdRef.current) {
          const startRow = pageSize * pageIndex;
          const endRow = startRow + pageSize;          
          setData(dispatch(
            setSlice({
              start: startRow,
              end: endRow,
            })));
          // items.sliceItem( data, startRow, endRow);   
          setPageCount(Math.ceil(data.length / pageSize));
          
        }
      }, 1000);
    // }; 
    // initLists();
  }, []);
  
  

  const column = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id',
      Filter: '',
      filter: '',
    },
    {
      Header: 'Title',
      accessor: 'title',
      Filter: '',
      filter: '',
    },
    {
      Header: 'Description',
      accessor: 'description',
      Filter: '',
      filter: '',
    },
    {
      Header: 'Create Date',
      accessor: (d) => {
        return formatDateTime(d.createdAt);
      },
      Filter: '',
      filter: '',
    },
    {
      Header: 'Update Date',
      accessor: (d) => {
        return formatDateTime(d.updatedAt);
      },
      Filter: '',
      filter: '',
    },
  ]);

  

  return (
    <div className="container py-8 mx-auto">

        <Table
          columns={column}
          data={data}
          fetchData={fetchData}
          loading={loading}
          pageCount={pageCount}
        />      
    </div>
  );
};

export default TableShow;
