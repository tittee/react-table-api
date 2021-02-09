import { useState } from 'react';

const useData = (init) => {
  const [data, setData] = useState(init);

  return {
    data,
    sliceItem(data, start, end) {
      // const copyList = [...init];
      setData(data.slice(start, end));
    },
  };
};

export default useData;
