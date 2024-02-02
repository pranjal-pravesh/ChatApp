import { createSlice } from "@reduxjs/toolkit";

const contactDetailSlice = createSlice({
    name:'contactDetail',
    initialState:false,
    reducers:{
        toggleContactDetailOn: (state)=>{
            return true;
        },

        toggleContactDetailOff: (state)=>{
            return false;
        }
    }
});

export const {toggleContactDetailOn, toggleContactDetailOff} = contactDetailSlice.actions;
export default contactDetailSlice.reducer;