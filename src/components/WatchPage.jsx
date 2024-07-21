import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_API, YOUTUBE_VIDEO_API } from '../utils/constants';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { formatCompactNumber } from '../utils/helper';
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import { RiShareForwardFill } from 'react-icons/ri';
import { IoMdDownload } from 'react-icons/io';
import { MdMoreHoriz } from 'react-icons/md';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const WatchPage = () => {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getVideo();
  }, [videoId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getVideo = async () => {
    const data = await Promise.all([
      fetch(`${YOUTUBE_VIDEO_API}&id=${videoId}`),
      fetch(YOUTUBE_API),
    ]);
    const watchVideoJson = await data[0].json();
    const recVideoJson = await data[1].json();
    console.log(watchVideoJson, recVideoJson);
    setVideo(watchVideoJson?.items[0]);
    setRelatedVideos(recVideoJson?.items);
  };

  if (!video) return null;

  const { snippet, statistics } = video || {};
  const { channelTitle, title, thumbnails, publishedAt } = snippet || {};

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex max-w-full">
        <div>
          <iframe
            className="w-[1000px] aspect-video"
            src={'https://www.youtube.com/embed/' + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="flex justify-between">
            <div className="flex">
              <img
                src={thumbnails?.default?.url}
                alt="thumbnail"
                className="h-10 w-10 rounded-full"
              />
              <div className="flex flex-col">
                <h1>{channelTitle}</h1>
                <p>{formatCompactNumber(statistics?.viewCount)} views</p>
              </div>
            </div>
            <button>subscribe</button>
            <div className="flex">
              <BiSolidLike className="w-10 h-10" />
              <BiSolidDislike className="w-10 h-10" />
              <RiShareForwardFill className="w-10 h-10" />
              <IoMdDownload className="w-10 h-10" />
              <MdMoreHoriz className="w-10 h-10" />
            </div>
          </div>
        </div>
        <div className="w-[80%]">
          <LiveChat />
        </div>
      </div>
      <div className="flex">
        <CommentsContainer />
        <div className="flex flex-col">
          {relatedVideos.map((video) => (
            <Link key={video.id} to={'/watch?v=' + video?.id}>
              <div className="px-3 m-2 mt-[20px] flex">
                <img
                  className="rounded-xl w-[168px] h-[94px] "
                  alt="thumbnail"
                  src={video?.snippet?.thumbnails?.medium?.url}
                />
                <ul className="flex flex-col justify-start ml-2 w-60">
                  <li className="font-medium py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5">
                    {video?.snippet?.title}
                  </li>
                  <li className="text-gray-500 text-[12px]">
                    {video?.snippet?.channelTitle}
                  </li>
                  <li className="text-gray-500 text-[12px]">
                    100 views{' '}
                    {(
                      Math.abs(
                        new Date(video?.snippet?.publishedAt) - new Date(),
                      ) /
                      (60 * 60 * 24 * 1000)
                    ).toFixed(1)}{' '}
                    days ago
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
