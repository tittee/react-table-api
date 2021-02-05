import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'List',
  initialState: {
    currentList: false,
    lists: [],
    filteredLists: false,
  },
  reducers: {
    setCurrentList: (state, action) => {
      state.currentList = action.payload;
    },
    setLists: (state, action) => {
      state.lists = action.payload;
      // state.filteredLists = action.payload;
    },
  },
});

export const { setCurrentList, setLists } = listSlice.actions;
export default listSlice.reducer;
