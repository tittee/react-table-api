import React, { useState } from 'react';
import {
  useAsyncDebounce,
} from 'react-table';

// Define a default UI for filtering
// const GlobalFilter = ({
//   preGlobalFilteredRows,
//   globalFilter,
//   columns,
//   data,
// }) => {
//   const count = preGlobalFilteredRows.length;
//   const [value, setValue] = useState(globalFilter);

//   const onChange = useAsyncDebounce((value) => {
//     setGlobalFilter(value || undefined);
//     console.log(value);
//   }, 30);

//   const { setGlobalFilter } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 2 },
//     },
//     useFilters,
//     useGlobalFilter
//   );

//   return (
//     <span>
//       Search:{' '}
//       <input
//         value={value || ''}
//         onChange={(e) => {
//           setValue(e.target.value);
//           onChange(e.target.value);
//         }}
//         placeholder={`${count} records ...`}
//         style={{
//           fontSize: '1.1rem',
//           border: '0',
//         }}
//       />
//     </span>
//   );
// };



// Define a default UI for filtering
const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  )
}

export default GlobalFilter;