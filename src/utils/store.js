import appSlice from "./appSlice.js";
import  { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice.js";
import videoSlice from './videoSlice.js';

const store = configureStore({
    reducer :{
        app : appSlice,
        chat : chatSlice,
        video : videoSlice,
    }
})

export default store;