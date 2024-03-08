import { createSlice } from '@reduxjs/toolkit';

const accentSlice = createSlice({
  name: 'accent',
  initialState: '#49AEEF',
  reducers: {

    setAccent: (state, action) =>{
      return action.payload
    }
  },
});

// Exporting actions and reducer from the slice
export const { setAccent } = accentSlice.actions;
export default accentSlice.reducer;