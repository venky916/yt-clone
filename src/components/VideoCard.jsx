import React from 'react';
import { formatCompactNumber } from '../utils/helper';

const VideoCard = ({ info }) => {
  if (!info) return null;
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="p-2 m-2 w-60 shadow-lg">
      <img
        className="rounded-lg hover:drop-shadow-xl "
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul className="flex justify-start items-start">
        <img
          className="rounded-full w-7 h-7 mt-2"
          alt="thumbnail"
          src={thumbnails.default.url}
        />
        <div>
          <li className="font-bold py-2 line-clamp-1 max-h-[30px] ">{title}</li>
          <li className="text-gray-500 text-[13px] line-clamp-1 max-h-4">{channelTitle}</li>
          <li className="text-gray-500 text-[13px]">
            {formatCompactNumber(statistics.viewCount)} views
            {Math.abs(
              (new Date(publishedAt) - new Date()) / (60 * 60 * 24 * 1000),
            ).toFixed(0)}{' '}
            days ago
          </li>
        </div>
      </ul>
    </div>
  );
};

//HigherOrdercomponent
export const AddVideoCard = ({info})=>{
  return(
    <div className='p-1 m-1 border border-red-900'>
      <VideoCard info={info} />
    </div>
  )
}

export default VideoCard;
