import appSlice from "./appSlice.js";
import  { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice.js";
import chatSlice from "./chatSlice.js";

const store = configureStore({
    reducer :{
        app : appSlice,
        search : searchSlice,
        chat : chatSlice,
        // video : videoslice,
    }
})

export default store;