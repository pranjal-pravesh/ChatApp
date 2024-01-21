import { createSlice } from '@reduxjs/toolkit';

const tabSlice = createSlice({
  name: 'tab',
  initialState: 'chats',
  reducers: {
    changeTab: (state, action) => {
        return state = action.payload;
    },
  },
});

// Exporting actions and reducer from the slice
export const { changeTab } = tabSlice.actions;
export default tabSlice.reducer;