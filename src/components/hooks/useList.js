const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};


const useList = (...lens) => {
  const makeDataLevel = (depth = 200) => {
    const len = lens[depth];
    // console.log(lens);

    return range(len).map((d) => {
      return {
        lens,
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };
  

  

  
  return {
    makeDataLevel,    
  };
};

export default useList;
