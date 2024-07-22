import appSlice from "./appSlice.js";
import  { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice.js";
import chatSlice from "./chatSlice.js";
import videoSlice from './videoSlice.js';

const store = configureStore({
    reducer :{
        app : appSlice,
        search : searchSlice,
        chat : chatSlice,
        video : videoSlice,
    }
})

export default store;