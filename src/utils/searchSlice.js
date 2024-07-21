import {createSlice} from "@reduxjs/toolkit";


const searchslice = createSlice({
    name :"search",
    initialState : {
        cache : {},
    },
    reducers : {
        cacheResults : (state,action) =>{
            // state.cache = {...state.cache,...action.payload}
            state.cache = Object.assign(state.cache,action.payload);
        }
    }
})

export const { cacheResults } = searchslice.actions;
export default searchslice.reducer;