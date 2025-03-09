import React from 'react';
import { formatCompactNumber } from '../utils/helper';
import { FaPlay } from 'react-icons/fa';

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  // Calculate days since published
  const daysAgo = Math.floor(
    (new Date() - new Date(publishedAt)) / (1000 * 60 * 60 * 24),
  );

  return (
    <div className="p-2 m-2 w-96 sm:w-80 md:w-72 lg:w-96 hover:shadow-xl transition-shadow duration-200 rounded-lg">
      {/* Thumbnail */}
      <img
        className="rounded-lg w-full h-40 object-cover"
        alt="thumbnail"
        src={thumbnails.medium.url}
        loading="lazy"
      />

      {/* Video Details */}
      <div className="flex mt-3">
        {/* Channel Thumbnail */}
        <img
          className="rounded-full w-10 h-10 mr-3"
          alt="channel"
          src={thumbnails.default.url}
          loading="lazy"
        />

        {/* Video Info */}
        <div className="flex-1">
          <h3 className="font-semibold text-sm line-clamp-1">{title}</h3>
          <p className="text-gray-600 text-xs mt-1">{channelTitle}</p>
          <p className="text-gray-600 text-xs mt-1">
            {statistics?.viewCount
              ? `${formatCompactNumber(statistics.viewCount)} views • `
              : ''}
            {daysAgo === 0 ? 'Today' : `${daysAgo} days ago`}
          </p>
        </div>
      </div>
    </div>
  );
};

// Higher-Order Component for Ad Video Card
export const AddVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-gray-900 rounded-lg relative overflow-hidden">
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
        <div className="mb-10 text-white text-4xl hover:text-red-500 transition-colors duration-200 animate-pulse">
          <FaPlay />
        </div>
      </div>

      {/* Video Card in the Background */}
      <div className="relative z-0">
        <VideoCard info={info} />
      </div>
    </div>
  );
};

export default VideoCard;
