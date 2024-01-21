import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    toggleTheme: (state) => {
        return state === 'light' ? 'dark' : 'light';
    },
  },
});

// Exporting actions and reducer from the slice
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;