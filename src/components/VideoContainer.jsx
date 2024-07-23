import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constants';
import VideoCard, { AddVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import store from '../utils/store';
import { addNextPageToken, addVideos } from '../utils/videoSlice';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video.videos);
  const nextPageToken = useSelector(store=>store.video.nextPageToken);
  // console.log(videos);

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    const debouncedInfiniteScroll = debounce(infiniteScroll, 300);
    window.addEventListener('scroll', debouncedInfiniteScroll, true);
    return () => {
      window.removeEventListener('scroll', debouncedInfiniteScroll, true);
    };
  }, [nextPageToken]);

  const getVideos = async () => {
    try {
      const url =
        nextPageToken !== ''
          ? `${YOUTUBE_API}&pageToken=${nextPageToken}`
          : YOUTUBE_API;
      const response = await fetch(url);
      const json = await response.json();
      // console.log(json)

      if (!Array.isArray(json?.items)) {
        throw new Error('API response is not as expected');
      }
      dispatch(addVideos(json.items));
      dispatch(addNextPageToken(json.nextPageToken));
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const infiniteScroll = () => {
    if (
      window.innerHeight + Math.round(document.documentElement.scrollTop) >=
      document.documentElement.offsetHeight - 400
    ) {
      getVideos();
    }
  };

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  if (!videos.length) return <Shimmer />;
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AddVideoCard info={videos[0]} key="add-video-card" />}
      {videos.map((video, index) => (
        <Link
          key={video.id.videoId || index}
          to={'/watch?v=' + (video.id.videoId || video.id)}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
