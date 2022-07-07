import { createSlice } from "@reduxjs/toolkit";


const initialState : string = "";

const filterReducer = createSlice({
    name: "filter",
    initialState,
    reducers:{
        filterItem : (state, action) => {
            state = action.payload;
            return state;
        }
    }

})

export const {filterItem} = filterReducer.actions;


export default filterReducer.reducer;