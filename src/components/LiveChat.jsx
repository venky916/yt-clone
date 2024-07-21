import React, { useEffect, useRef, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, randomMessage } from '../utils/helper';
const LiveChat = () => {
  const dispatch = useDispatch();
  // const liveMessage = useRef('');
  // console.log(liveMessage.current.value);

  const [liveMessage, setLiveMessage] = useState('');

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      //API POLLING
      console.log('API POLLING');
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomMessage(20) + '✋',
        }),
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[500px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: 'Venkatesh Maliga',
              message: liveMessage + '🚀',
            }),
          );
          setLiveMessage('');
        }}
      >
        {/* <input className="w-3/4 " type="text" placeholder='Enter Comment' ref={liveMessage}/> */}
        <input
          className="w-3/4 px-2 "
          type="text"
          placeholder="Enter Comment"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button type='submit' className="px-2 mx-2 bg-green-400">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
