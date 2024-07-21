import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-1'>
      <img
        className="h-10"
        alt="userIcon"
        src="https://static.vecteezy.com/system/resources/previews/000/576/206/original/vector-sign-of-people-icon.jpg"
      />
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  );
}

export default ChatMessage