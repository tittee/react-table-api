import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'Data',
  initialState: {
    currentData: false,
    data: [],
    filteredLists: false,
  },
  reducers: {
    setCurrentData: (state, action) => {
      state.currentData = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
      // state.filteredData = state.data.slice(startRow, endRow);
      // state.filteredDatas = action.payload;
    },
  },
});

export const { setCurrentData, setData } = listSlice.actions;
export default listSlice.reducer;
