import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice.js';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants.js';
import { cacheResults } from '../utils/searchSlice.js';
import { RxCrossCircled } from 'react-icons/rx';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search.cache);
  const clearSearch = () => {
    setSearchQuery('');
  };

  useEffect(() => {
    //API Call
    // make an api call after every key press
    // but if difference betwenn 2 api call is <200ms
    // decline api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggestions[searchCache[searchQuery]];
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key - i
   * - render the component
   * - useEffect()
   * - start time => make an api call after 200ms
   *
   * key - ip
   * - if before 200ms destroy the component(calls the useEffect retun method also)
   * - render the component
   * - useEffect()
   * - start time => make an api call after 200ms
   *
   * setTimeOut (200ms) => makes an apiCall
   */

  const getSearchSuggestions = async () => {
    // console.log('API Call- ' + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setsuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      }),
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

   const handleSuggestion = (event) => {
     setSearchQuery(event.target.innerText);
     setShowSuggestions(false);
   };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="hambergerlogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <img
          className="h-10 mx-2"
          alt="youtube logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
        />
      </div>
      <div className="col-span-10 px-19">
        <div className="flex items-center relative">
          <input
            className="w-2/4 py-2 border border-gray-400 rounded-l-full pl-10"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          {searchQuery && (
            <RxCrossCircled
              className="absolute right-2/4 mr-1 w-6 h-6 cursor-pointer text-gray-600 hover:bg-gray-200 rounded-full"
              onClick={clearSearch}
            />
          )}
          <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute z-10 bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-50">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                  onMouseDown={(e) => handleSuggestion(e)}
                >
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="userIcon"
          src="https://static.vecteezy.com/system/resources/previews/000/576/206/original/vector-sign-of-people-icon.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
