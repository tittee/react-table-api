import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'Data',
  initialState: {
    data: [],
    lastId: 0,
    isOpen: 0,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload + 1;
    },
    setLastId: (state, action) => {
      state.lastId = action.payload + 1;
    },
    setOpenModal: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setData, setLastId, setOpenModal } = dataSlice.actions;
export default dataSlice.reducer;
