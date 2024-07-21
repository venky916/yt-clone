import { createSlice } from "@reduxjs/toolkit";


const videoSlice = createSlice({
    name:'videos',
    initialState : {
        videos:[],
        nextPageToken:"",
    },
    reducers :{
        addVideos :(state,action)=>{
            state.videos = action.payload
        },
        addNextPageToken : (state,action)=>{
            state.nextPageToken = action.payload
        }
    }
})

export const {addVideos,addNextPageToken} = videoSlice.actions;
export default videoSlice.reducer;