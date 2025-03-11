import React, {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice.js';
import { RxCrossCircled } from 'react-icons/rx';
import getSearchVideos from '../utils/getSearchVideos.js';
import { FaUserCircle } from 'react-icons/fa';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const clearSearch = () => {
    setSearchQuery('');
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchText = () => {
    // useSearchVideos(searchQuery);
    getSearchVideos(searchQuery, dispatch);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg w-screen sticky top-0 z-20 bg-white/20 backdrop-blur-md">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer"
          alt="hambergerlogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <img
          className="h-10 mx-2 cursor-pointer"
          alt="tube logo"
          src="https://cdn.pixabay.com/photo/2021/09/11/18/21/youtube-6616310_640.png"
          onClick={() => (window.location.href = '/')}
        />
      </div>
      <div className="col-span-10 px-19">
        <div className="flex items-center relative">
          <input
            className="w-2/4 py-2 border border-gray-400 rounded-l-full pl-5"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <RxCrossCircled
              className="absolute right-2/4 mr-1 w-6 h-6 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-full"
              onClick={clearSearch}
            />
          )}
          <button
            className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full"
            onClick={handleSearchText}
          >
            🔍
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <FaUserCircle
          className="cursor-pointer w-10 h-10"
          onClick={() => (window.location.href = '/profile')}
        />
      </div>
    </div>
  );
};

export default Head;
