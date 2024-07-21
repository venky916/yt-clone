import React, { useRef, useState } from 'react';
import Button from './Button';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const ButtonList = () => {
  const list = [
    'All',
    'Gaming',
    'Music',
    'Cooking',
    'Valentine',
    'Cricket',
    'Songs',
    'Gaming',
    'Music',
    'Cooking',
    'Valentine',
    'Cricket',
    'Songs',
    'Gaming',
    'Music',
    'Cooking',
    'Valentine',
    'Cricket',
    'Songs',
    'Gaming',
    'Music',
    'Cooking',
    'Valentine',
    'Cricket',
    'Songs',
  ];

  const scrollRef = useRef(null);
  const [selectText,setSelectText] = useState("All");

  const handleSelect = (name)=>{
    setSelectText(name);
  }

  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(scrollRef.current.children[1]).width,
      );
      scrollRef.current.scrollLeft = scrollLeft - itemWidth * 3;
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(scrollRef.current.children[1]).width,
      );
      scrollRef.current.scrollLeft = scrollLeft + itemWidth * 3;
    });
  };

  return (
    <div className="relative flex items-center mx-12">
      <FaChevronCircleLeft className="w-8 h-8 cursor-pointer" onClick={prev} />
      <div
        className="overflow-x-scroll flex w-[1200px] no-scrollbar-custom"
        ref={scrollRef}
      >
        {list.map((value, index) => (
          <Button key={index} name={value} selectText={selectText} onSelect={handleSelect}/>
        ))}
      </div>
      <FaChevronCircleRight className="w-8 h-8 cursor-pointer" onClick={next} />
    </div>
  );
};

export default ButtonList;
