import { createSlice } from "@reduxjs/toolkit";


const videoSlice = createSlice({
    name: 'videos',
    initialState: {
        videos: [],
        nextPageToken: "",
    },
    reducers: {
        addVideos: (state, action) => {
            state.videos = [...state.videos, ...action.payload]
        },
        addNextPageToken: (state, action) => {
            state.nextPageToken = action.payload
        },
        addSearchVideos: (state, action) => {
            state.videos = action.payload
        }
    }
})

export const { addVideos, addNextPageToken, addSearchVideos } = videoSlice.actions;
export default videoSlice.reducer;