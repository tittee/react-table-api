import { useEffect, useState } from 'react';
import { getLists } from '../../apis';

const useCustomFetch = () => {
  const [resdata, setResData] = useState([]);
  const [loading, setLoading] = useState(null);

  const customFetch = async () => {
    try {
      let rData = await getLists();
      setResData(rData.data);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    customFetch();
  }, []);

  return [resdata, loading];
};

export default useCustomFetch;
