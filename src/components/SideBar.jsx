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
    <div
      className="p-5 shadow-lg sticky top-24 h-screen bg-white"
      style={{ minHeight: '100vh' }} // Ensure full screen height
    >
      <ul>
        {/* Home */}
        <li className="mb-2">
          <Link to={'/'}>
            <div className="flex items-center p-2 hover:bg-gray-200 rounded-md cursor-pointer transition-colors duration-200">
              <FaHome className="text-xl cursor-pointer" />
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

        {/* Profile */}
        <li className="mb-2">
          <Link to={'/profile'}>
            <div className="flex items-center p-2 hover:bg-gray-200 rounded-md cursor-pointer transition-colors duration-200">
              <FaUser className="text-xl cursor-pointer" />
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

        {/* Bookmarks */}
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md cursor-pointer transition-colors duration-200">
            <FaBookmark className="text-xl cursor-pointer" />
            <div
              className={`ml-2 overflow-hidden transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              Bookmarks
            </div>
          </div>
        </li>

        {/* Settings */}
        <li className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md cursor-pointer transition-colors duration-200">
            <FaCog className="text-xl cursor-pointer" />
            <div
              className={`ml-2 overflow-hidden transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              Settings
            </div>
          </div>
        </li>

        {/* Logout */}
        <li className="my-2 border-y-2">
          <div className="flex items-center p-2 hover:bg-gray-200 rounded-md cursor-pointer transition-colors duration-200">
            <FaSignOutAlt className="text-xl cursor-pointer" />
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
