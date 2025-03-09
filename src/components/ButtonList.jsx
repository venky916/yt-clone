import React, { useRef, useState } from 'react';
import Button from './Button';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import getSearchVideos from '../utils/getSearchVideos';
import { topics } from '../utils/constants';

const ButtonList = () => {
  const list = topics;
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const [selectText, setSelectText] = useState('All');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleSelect = (name) => {
    setSelectText(name);
    getSearchVideos(name, dispatch);
  };

  const prev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const next = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  return (
    <div className="backdrop-blur-md bg-white/60 z-10  overflow-hidden rounded-full px-4 mb-5">
      <div className="relative flex items-center max-w-fit">
        {/* Left Arrow */}
        {showLeftArrow && (
          <div className="absolute left-0 z-20 bg-white bg-opacity-75 rounded-full p-1 shadow-lg">
            <FaChevronCircleLeft
              className="w-8 h-8 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-200"
              onClick={prev}
            />
          </div>
        )}

        {/* Scrollable Container */}
        <div
          className="overflow-x-scroll flex flex-1 no-scrollbar-custom px-10  w-fit mx-auto"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {/* List Items */}
          {list.map((value, index) => (
            <Button
              key={index}
              name={value}
              selectText={selectText}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <div className="absolute right-0 z-20 bg-white bg-opacity-75 rounded-full p-1 shadow-lg">
            <FaChevronCircleRight
              className="w-8 h-8 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-200"
              onClick={next}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonList;
