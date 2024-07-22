import React, { useState } from 'react';

const Profile = () => {
  const [count, setCount] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-200 rounded-lg bg-gray-100 mt-10 h-[50%]">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Venkatesh Maliga</h3>
          <h4 className="text-lg text-gray-600 mb-2">
            WEB - DEVELOPER (MERN STACK || DJANGO) | JAVA SCRIPT | PYTHON | DSA
          </h4>
          <h4 className="text-md text-gray-600 mb-4">
            Nellore, Andhra Pradesh
          </h4>
          <h4>
            <a
              href="venkateshsmsv1999@gmail.com"
              className="text-blue-500 hover:underline"
            >
              venkateshsmsv1999@gmail.com
            </a>
          </h4>
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://github.com/venky916/yt-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Github Link
            </a>
            <a
              href="https://www.linkedin.com/in/Venkatesh-Maliga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex justify-center mb-6 ">
          {!imageLoaded && (
            <div className="animate-spin w-32 h-32 rounded-full shimmer bg-gray-300 "></div>
          )}
          <img
            src="https://avatars.githubusercontent.com/u/87594764?s=400&u=8d91af8065ad0d533b48df98eb12f2838e362ff3&v=4"
            alt="Profile"
            className={`w-32 h-32 rounded-full border-black border-2 object-cover ${
              imageLoaded ? '' : 'hidden'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
};

export default Profile;
