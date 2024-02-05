import { createSlice } from "@reduxjs/toolkit";

const settingsSectionSlice = createSlice({
    name:'settingsSection',
    initialState:1,
    reducers:{
        changeSettingsSection: (state, action)=>{
            return state = action.payload;
        },

    }
});

export const {changeSettingsSection} = settingsSectionSlice.actions;
export default settingsSectionSlice.reducer;