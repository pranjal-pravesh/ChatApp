import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:'sidebarVisibility',
    initialState:true,
    reducers:{
        setSidebarVisibility: (state, action)=>{
            return action.payload;
        },

        
    }
});

export const {setSidebarVisibility} = sidebarSlice.actions;
export default sidebarSlice.reducer;