import { createSlice } from "@reduxjs/toolkit";

const contactDetailSlice = createSlice({
    name:'contactDetail',
    initialState:false,
    reducers:{
        toggleContactDetail: (state)=>{
            return state===true?false:true;
        }
    }
});

export const {toggleContactDetail} = contactDetailSlice.actions;
export default contactDetailSlice.reducer;