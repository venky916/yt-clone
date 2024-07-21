import React, { useEffect, useState, useCallback } from 'react';
import { YOUTUBE_API } from '../utils/constants';
import VideoCard, { AddVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const dispatch = useDispatch();


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

      if (!Array.isArray(json?.items)) {
        throw new Error('API response is not as expected');
      }

      setVideos((prevVideos) => [...prevVideos, ...json.items]);
      setNextPageToken(json.nextPageToken);
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

  return (
    <div className="flex flex-wrap w-screen">
      {videos[0] && <AddVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={'/watch?v=' + video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
