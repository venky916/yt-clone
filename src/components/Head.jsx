import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice.js';
import { TUBE_SEARCH_API } from '../utils/constants.js';
import { cacheResults } from '../utils/searchSlice.js';
import { RxCrossCircled } from 'react-icons/rx';
import getSearchVideos from '../utils/getSearchVideos.js';
import { FaUserCircle } from 'react-icons/fa';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search.cache);

  const clearSearch = () => {
    setSearchQuery('');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(TUBE_SEARCH_API + searchQuery);
      const json = await response.json();
      setsuggestions(json[1]);
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        }),
      );
    } catch (error) {
      console.error('Error fetching search suggestions:', error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestion = (s) => {
    setSearchQuery(s);
    setShowSuggestions(false);
  };

  const handleSearchText = () => {
    // useSearchVideos(searchQuery);
    getSearchVideos(searchQuery, dispatch);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setSelectedIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex,
      );
    } else if (event.key === 'ArrowUp') {
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (event.key === 'Enter') {
      if (selectedIndex >= 0) {
        handleSuggestion(suggestions[selectedIndex]);
      }
    }
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
          className="h-10 mx-2"
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
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onKeyDown={handleKeyDown}
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
        {showSuggestions && (
          <div className="absolute z-10 bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-50">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={s}
                  className={`py-2 px-3 shadow-sm hover:bg-gray-100 ${
                    selectedIndex === index ? 'bg-gray-500 text-white' : ''
                  }`}
                  onMouseDown={() => handleSuggestion(s)}
                >
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
