import React from 'react';



const Button = ({ name, selectText, onSelect }) => {
  return (
    <div
      className={`px-5 py-2 m-2 bg-gray-200 rounded-lg select-none hover:cursor-pointer hover:bg-gray-500 ${
        selectText === name ? 'bg-red-900' : ''
      }`}
      onClick={() => onSelect(name)}
    >
      {name}
    </div>
  );
};

export default Button;
