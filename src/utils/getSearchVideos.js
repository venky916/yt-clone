import { addNextPageToken, addSearchVideos } from '../utils/videoSlice';
import { YOUTUBE_SEARCH_VIDEO_API } from '../utils/constants';

const getSearchVideos = async (searchQuery, dispatch) => {
    const response = await fetch(`${YOUTUBE_SEARCH_VIDEO_API}&q=${searchQuery}`);
    const json = await response.json();
    dispatch(addSearchVideos(json.items));
    dispatch(addNextPageToken(json.nextPageToken)); 
};

export default getSearchVideos;
