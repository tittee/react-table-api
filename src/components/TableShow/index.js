import React, { useMemo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLists } from '../../apis';
import { setLists } from '../../redux/lists';
import { formatDateTime } from './../../utils/Utility';
import Table from './../Table';

const TableShow = () => {
  const dispatch = useDispatch();

  const lists = useSelector((state) => state.lists.lists);
  const [loading, setLoading] = useState(true);

  const column = useMemo(() => [
    {
      Header: 'ID',
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
      accessor: (d) => {
        return formatDateTime(d.createdAt);
      },
    },
    {
      Header: 'Update Date',
      accessor: (d) => {
        return formatDateTime(d.updatedAt);
      },
    },
  ]);

  useEffect(() => {
    const initLists = async () => {
      const listsRes = await getLists();
      if (listsRes) {
        const data = listsRes.data;
        dispatch(setLists(data));
        setLoading(false);
      }
    };
    initLists();
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Table columns={column} data={lists} />
      )}
    </div>
  );
};

export default TableShow;
