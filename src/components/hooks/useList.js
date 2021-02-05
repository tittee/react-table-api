import namor from 'namor';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchLists } from '../../apis';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const listContents = (contents) => {
  console.log(contents);

  return {
    id: namor.generate({ words: 0, numbers: 1 }),
    title: namor.generate({ words: 1, numbers: 0 }),
    description: namor.generate({ words: 1, numbers: 0 }),
    createdAt: Math.floor(Math.random() * 100),
    updatedAt: Math.floor(Math.random() * 100),
  };
};

const useList = (...lens) => {
  listContents(...lens);
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
