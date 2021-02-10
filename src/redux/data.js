import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'Data',
  initialState: {
    data: [],
    lastId: 0,
    isClose: 0,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload + 1;
    },
    setLastId: (state, action) => {
      state.lastId = action.payload + 1;
    },
    setCloseModal: (state, action) => {
      state.isClose = action.payload;
    },
  },
});

export const { setData, setLastId, setCloseModal } = dataSlice.actions;
export default dataSlice.reducer;
