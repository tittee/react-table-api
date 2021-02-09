import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'Data',
  initialState: {  
    data: [],      
  },
  reducers: {   
    setSlice: (state, action) => {                  
      const copy = [...state.data];
      copy.splice(action.payload.start, action.payload.end);
      state.data = copy;
    },
  },
});

export const { setSlice } = dataSlice.actions;
export default dataSlice.reducer;
