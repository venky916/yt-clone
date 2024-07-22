import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaBookmark,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="p-5 shadow-lg ">
      <ul>
        <li className="mb-2">
          <Link to={'/'}>
            <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
              <FaHome className="text-xl" />
              <div
                className={`ml-2 overflow-hidden transition-all duration-500 ease-in-out ${
                  isMenuOpen ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
                }`}
              >
                Home
              </div>
            </div>
          </Link>
        </li>
        <li className="mb-2">
          <Link to={'/profile'}>
            <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
              <FaUser className="text-xl" />
              <div
                className={`ml-2 overflow-hidden transition-all duration-500 ease-in-out ${
                  isMenuOpen ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
                }`}
              >
                Profile
              </div>
            </div>
          </Link>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaBookmark className="text-xl" />
            <div
              className={`ml-2 overflow-hidden transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              Bookmarks
            </div>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaCog className="text-xl" />
            <div
              className={`ml-2 overflow-hidden transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              Settings
            </div>
          </div>
        </li>
        <li className="my-2 border-y-2 ">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md">
            <FaSignOutAlt className="text-xl" />
            <div
              className={`ml-2 overflow-hidden transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              Logout
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
