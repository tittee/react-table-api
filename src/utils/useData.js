import { useState } from 'react';

const useData = (init) => {
  const [data, setData] = useState(init);

  return {
    data,
    removeItem(item) {
      const filteredData = data.filter((v) => v.name !== item);
      setData(filteredData);
    },
    saveItem(index, newVal) {
      const copyData = [...data];
      copyData[index].name = newVal;
    },
  };
};

export default useData;
