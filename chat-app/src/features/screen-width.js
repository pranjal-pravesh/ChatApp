import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    screenWidth: window.innerWidth, // Initial screen width
};

const screenSlice = createSlice({
    name: 'screenWidth',
    initialState,
    reducers: {
        updateScreenWidth: (state, action) => {
            state.screenWidth = action.payload;
        },
    },
});

export const { updateScreenWidth } = screenSlice.actions;
export default screenSlice.reducer;
