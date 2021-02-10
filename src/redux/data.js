import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'Data',
  initialState: {
    data: [],
    lastId: 0,
    isClose: 0,
  },
  reducers: {
    setLastId: (state, action) => {      
      state.lastId = action.payload + 1;
    },
    setCloseModal: (state, action) => {     
      state.isClose = action.payload;
    },
  },
});

export const { setLastId, setCloseModal } = dataSlice.actions;
export default dataSlice.reducer;
