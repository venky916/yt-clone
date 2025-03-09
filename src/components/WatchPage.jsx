import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { TUBE_API, TUBE_VIDEO_API } from '../utils/constants';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { formatCompactNumber } from '../utils/helper';
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import { RiShareForwardFill } from 'react-icons/ri';
import { IoMdDownload } from 'react-icons/io';
import { MdMoreHoriz } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
      fetch(`${TUBE_VIDEO_API}&id=${videoId}`),
      fetch(TUBE_API),
    ]);
    const watchVideoJson = await data[0].json();
    const recVideoJson = await data[1].json();
    setVideo(watchVideoJson?.items[0]);
    setRelatedVideos(recVideoJson?.items);
    window.scrollTo(0, 0);
  };

  if (!video) return null;

  const { snippet, statistics } = video || {};
  const { channelTitle, title, thumbnails, publishedAt } = snippet || {};

  return (
    <div className="flex flex-col p-3">
      {/* Video Player and Live Chat */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Video Player */}
        <div className="w-full max-w-4xl">
          <iframe
            className="w-full aspect-video rounded-xl shadow-lg p-4 sm:p-0"
            src={'https://www.youtube.com/embed/' + videoId}
            title="Tube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          {/* Video Details */}
          <div className="mt-4">
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="flex flex-col  md:flex-row  justify-between items-start  sm:items-center mt-2">
              {/* Channel Info */}
              <div className="flex items-center">
                <img
                  src={thumbnails?.default?.url}
                  alt="thumbnail"
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">{channelTitle}</p>
                  <p className="text-sm text-gray-600">
                    {formatCompactNumber(statistics?.viewCount)} views
                  </p>
                </div>
              </div>

              {/* Subscribe Button */}
              <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 mt-2 sm:mt-0">
                Subscribe
              </button>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                <div className="flex items-center gap-2">
                  <BiSolidLike className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                  <span className="text-sm text-gray-600">
                    {formatCompactNumber(statistics?.likeCount)}
                  </span>
                </div>
                <BiSolidDislike className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                <RiShareForwardFill className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                <IoMdDownload className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                <MdMoreHoriz className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Live Chat */}
        <div className="w-full lg:w-[400px]">
          <LiveChat />
        </div>
      </div>

      {/* Comments and Related Videos */}
      <div className="flex flex-col lg:flex-row gap-10 mt-5">
        {/* Comments Section */}
        <div className="max-w-4xl">
          <CommentsContainer />
        </div>

        {/* Related Videos */}
        <div className="w-full lg:w-[400px]">
          <h2 className="text-xl font-bold mb-4">Related Videos</h2>
          {relatedVideos.slice(0,10).map((video) => (
            <Link key={video.id} to={'/watch?v=' + video?.id}>
              <div className="flex gap-3 mb-4">
                <img
                  className="rounded-lg w-40 h-24 object-cover"
                  alt="thumbnail"
                  src={video?.snippet?.thumbnails?.medium?.url}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm line-clamp-2">
                    {video?.snippet?.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {video?.snippet?.channelTitle}
                  </p>
                  <p className="text-sm text-gray-600">
                    {formatCompactNumber(video?.statistics?.viewCount)} views •{' '}
                    {Math.floor(
                      (new Date() - new Date(video?.snippet?.publishedAt)) /
                        (1000 * 60 * 60 * 24),
                    )}{' '}
                    days ago
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
