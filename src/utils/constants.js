const GOOGLE_API_KEY = 'AIzaSyA37Ybwn8uspRd6oE5H159wjBtRJi0WWik';

export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=' + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const OFFSET_LIVE_CHAT = 25;

// export const YOUTUBE_SEARCH_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]';