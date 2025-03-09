import { useDispatch, useSelector } from 'react-redux';
import { addNextPageToken, addVideos } from '../utils/videoSlice';
import { TUBE_SEARCH_VIDEO_API } from '../utils/constants';
import { useEffect } from 'react';

const useSearchVideos = (searchQuery) => {
    const dispatch =useDispatch();
    const nextPageToken = useSelector((store) => store.video.nextPageToken);

    const getVideos = async (searchQuery) => {
        const url = nextPageToken !== '' ? `${TUBE_SEARCH_VIDEO_API}&q=${searchQuery}&pageToken=${nextPageToken}` : `${TUBE_SEARCH_VIDEO_API}&q=${searchQuery}`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        dispatch(addVideos(json.items));
        dispatch(addNextPageToken(json.nextPageToken));
    }

    useEffect(() => getVideos(), [])

};

export default useSearchVideos;
