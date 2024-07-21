// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import {
//   FaHome,
//   FaVideo,
//   FaStream,
//   FaGamepad,
//   FaMusic,
//   FaFilm,
//   FaClock,
// } from 'react-icons/fa';

// const SideBar = () => {
//   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

//   return (
//     <div
//       className={`p-5 shadow-lg transition-all duration-1000 ease-in-out delay-1000 ${
//         isMenuOpen ? 'w-[10%]' : 'w-20'
//       }`}
//     >
//       <ul>
//         <li className="flex items-center mb-4">
//           <FaHome className="mr-3" />
//           {isMenuOpen && <Link to={'/'}>Home</Link>}
//         </li>
//         <li className="flex items-center mb-4">
//           <FaVideo className="mr-3" />
//           {isMenuOpen && <Link to={'/demo'}>Demo</Link>}
//         </li>
//         <li className="flex items-center mb-4">
//           <FaStream className="mr-3" />
//           {isMenuOpen && <span>Shorts</span>}
//         </li>
//         <li className="flex items-center mb-4">
//           <FaVideo className="mr-3" />
//           {isMenuOpen && <span>Videos</span>}
//         </li>
//         <li className="flex items-center mb-4">
//           <FaStream className="mr-3" />
//           {isMenuOpen && <span>Live</span>}
//         </li>
//       </ul>
//       <h1 className={`font-bold pt-5 mb-2 ${isMenuOpen ? 'block' : 'hidden'}`}>
//         Subscriptions
//       </h1>
//       <ul>
//         <li className="flex items-center mb-4">
//           <FaMusic className="mr-3" />
//           {isMenuOpen && <span>Music</span>}
//         </li>
//         <li className="flex items-center mb-4">
//           <FaGamepad className="mr-3" />
//           {isMenuOpen && <span>Sports</span>}
//         </li>
//         <li className="flex items-center mb-4">
//           <FaGamepad className="mr-3" />
//           {isMenuOpen && <span>Gaming</span>}
//         </li>
//         <li className="flex items-center mb-4">
//           <FaFilm className="mr-3" />
//           {isMenuOpen && <span>Movies</span>}
//         </li>
//       </ul>
//       <h1 className={`font-bold pt-5 mb-2 ${isMenuOpen ? 'block' : 'hidden'}`}>
//         Watch Later
//       </h1>
//       <ul>
//         <li className="flex items-center mb-4">
//           <FaClock className="mr-3" />
//           {isMenuOpen && <span>Music</span>}
//         </li>
//         <li className="flex items-center mb-4">
//           <FaClock className="mr-3" />
//           {isMenuOpen && <span>Sports</span>}
//         </li>
//         <li className="flex items-center mb-4">
//           <FaClock className="mr-3" />
//           {isMenuOpen && <span>Gaming</span>}
//         </li>
//         <li className="flex items-center mb-4">
//           <FaClock className="mr-3" />
//           {isMenuOpen && <span>Movies</span>}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SideBar;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { MdHome } from 'react-icons/md';
// import { SiYoutubeshorts } from 'react-icons/si';

// const SideBar = () => {
//   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

//   // Early return
//   // if (!isMenuOpen) return null;

//   return (
//     <div
//       className={`p-5 shadow-lg  transition-all duration-1000 ease-in-out ${
//         isMenuOpen ? 'opacity-100 w-48' : 'opacity-0 w-10'
//       }`}
//     >
//       <ul>
//         <li>
//           <Link to={'/'}>
//             <div className="flex">
//               <MdHome  className='opacity-100'/>
//               Home
//             </div>
//           </Link>
//         </li>
//         <li>
//           <Link to={'/demo'}>Demo</Link>
//         </li>
//         <li>
//           <div className='flex'>
//             <SiYoutubeshorts className='opacity-100'/>
//             Shorts
//           </div>
//         </li>
//         <li>Videos</li>
//         <li>Live</li>
//       </ul>
//       <h1 className="font-bold pt-5">Subscriptions</h1>
//       <ul>
//         <li>Music</li>
//         <li>Sports</li>
//         <li>Gaming</li>
//         <li>Movies</li>
//       </ul>
//       <h1 className="font-bold pt-5">Watch Later</h1>
//       <ul>
//         <li>Music</li>
//         <li>Sports</li>
//         <li>Gaming</li>
//         <li>Movies</li>
//       </ul>
//     </div>
//   );
// };

// export default SideBar;

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaVideo,
  FaStream,
  FaGamepad,
  FaMusic,
  FaFilm,
  FaClock,
} from 'react-icons/fa';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`p-5 shadow-lg transition-all duration-1000 ease-in-out ${
        isMenuOpen ? 'opacity-100 w-46' : 'opacity-100 w-30'
      }`}
    >
      <ul>
        <li className="mb-2">
          <Link to={'/'}>
            <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
              <FaHome className="opacity-100" />
              {isMenuOpen && <span className="ml-2">Home</span>}
            </div>
          </Link>
        </li>
        <li className="mb-2">
          <Link to={'/demo'}>
            <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
              <FaStream className="opacity-100" />
              {isMenuOpen && <span className="ml-2">Demo</span>}
            </div>
          </Link>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaVideo className="opacity-100" />
            {isMenuOpen && <span className="ml-2">Shorts</span>}
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaStream className="opacity-100" />
            {isMenuOpen && <span className="ml-2">Videos</span>}
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaClock className="opacity-100" />
            {isMenuOpen && <span className="ml-2">Live</span>}
          </div>
        </li>
      </ul>
      {isMenuOpen && <h1 className="font-bold pt-5">Subscriptions</h1>}
      <ul>
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaMusic className="opacity-100" />
            {isMenuOpen && <span className="ml-2">Music</span>}
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaStream className="opacity-100" />
            {isMenuOpen && <span className="ml-2">Sports</span>}
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaGamepad className="opacity-100" />
            {isMenuOpen && <span className="ml-2">Gaming</span>}
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaFilm className="opacity-100" />
            {isMenuOpen && <span className="ml-2">Movies</span>}
          </div>
        </li>
      </ul>
      {isMenuOpen && <h1 className="font-bold pt-5">Watch Later</h1>}
      <ul>
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaMusic className="opacity-100" />
            {isMenuOpen && <span className="ml-2">Music</span>}
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaStream className="opacity-100" />
            {isMenuOpen && <span className="ml-2">Sports</span>}
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaGamepad className="opacity-100" />
            {isMenuOpen && <span className="ml-2">Gaming</span>}
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaFilm className="opacity-100" />
            {isMenuOpen && <span className="ml-2">Movies</span>}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

