import React, { useMemo, useEffect, useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLists } from '../../apis';
import { setData } from '../../redux/data';
import { formatDateTime } from './../../utils/Utility';
import Table from './../Table';
import SelectColumnFilter from './../Table/components/SelectColumnFilter';

const TableShow = () => {
  const dispatch = useDispatch();

  // const [data, setData] = useState([]);
  const data = useSelector((state) => state.lists.data);
  const [loading, setLoading] = useState(true);
  const [pagePropsCount, setPagePropsCount] = useState(0);
  const fetchIdRef = useRef(0);

  useEffect(() => {
    const initLists = async () => {
      const listsRes = await getLists();
      if (listsRes) {
        // const data = listsRes.data;
        dispatch(setData(listsRes.data));
        // setLoading(false);
      }
    };
    initLists();
  }, []);



  const fetchData = useCallback(({ pageSize, pageIndex }) => {
    // const initLists = async () => {
    
      // This will get called when the table needs new data
      // You could fetch your data from literally anywhere,
      // even a server. But for this example, we'll just fake it.

      // Give this fetch an ID
      const fetchId = ++fetchIdRef.current;

      // Set the loading state
      setLoading(true);

      // We'll even set a delay to simulate a server here
      setTimeout(() => {
        // Only update the data if this is the latest fetch
        if (fetchId === fetchIdRef.current) {
          const startRow = pageSize * pageIndex;
          const endRow = startRow + pageSize;

          
          // const listsRes = getLists();
          // if (listsRes) {
          //   data = listsRes.data;
          
          //   // setLoading(false);
          // }
          
          // setData(data.slice(startRow, endRow));
          // dispatch(lists.slice(startRow, endRow));
          
          // Your server could send back total page count.
          // For now we'll just fake it, too
          setPagePropsCount(Math.ceil(data.length / pageSize));
          // dispatch(setLists(lists));

          
          setLoading(false);
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
      {/* {loading ? (
        <div>Loading...</div>
      ) : ( */}
        <Table
          columns={column}
          data={data}
          fetchData={fetchData}
          loading={loading}
          pagePropsCount={pagePropsCount}
        />
      {/* )} */}
    </div>
  );
};

export default TableShow;
